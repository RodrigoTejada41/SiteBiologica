import { createHash } from 'node:crypto';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const distDir = join(projectRoot, 'dist');
const expectedPages = [
  'index.html',
  '404.html',
  'area-do-cliente/index.html',
  'clientes/index.html',
  'contato/index.html',
  'catalogo-de-pragas/index.html',
  'catalogo-de-pragas/barata-americana/index.html',
  'catalogo-de-pragas/aedes-aegypti/index.html',
  'catalogo-de-pragas/ratazana/index.html',
  'catalogo-de-pragas/escorpiao-amarelo/index.html',
  'catalogo-de-pragas/pombo/index.html',
  'politica-de-privacidade/index.html',
  'servicos/index.html',
  'servicos/dedetizacao/index.html',
  'servicos/desinsetizacao/index.html',
  'servicos/desratizacao/index.html',
  'servicos/descupinizacao/index.html',
  'servicos/controle-de-pombos/index.html',
  'servicos/controle-integrado-de-pragas/index.html',
  'servicos/higienizacao-de-caixa-dagua/index.html',
  'servicos/sanitizacao/index.html',
];

const failures = [];
const check = (condition, message) => {
  if (!condition) failures.push(message);
};
const attribute = (tag, name) =>
  tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, 'i'))?.[1];
const scriptPattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
const executableTypes = new Set(['application/javascript', 'text/javascript', 'module']);

let internalLinks = 0;
let jsonLdBlocks = 0;
const executableHashes = new Set();

for (const relativeFile of expectedPages) {
  const file = join(distDir, relativeFile);
  check(existsSync(file), `${relativeFile}: página ausente`);
  if (!existsSync(file)) continue;

  const html = readFileSync(file, 'utf8');
  const visibleText = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');
  check(/<html\b[^>]*\blang=["']pt-BR["']/i.test(html), `${relativeFile}: idioma pt-BR ausente`);
  check((html.match(/<h1\b/gi) ?? []).length === 1, `${relativeFile}: deve existir exatamente um H1`);
  check(/<meta\b[^>]*\bname=["']description["'][^>]*\bcontent=["'][^"']+["']/i.test(html), `${relativeFile}: description ausente`);
  check(/<link\b[^>]*\brel=["']canonical["'][^>]*\bhref=["']https:\/\//i.test(html), `${relativeFile}: canonical HTTPS ausente`);
  if (relativeFile !== 'contato/index.html') {
    check(!visibleText.includes('(11) 96586-2473'), `${relativeFile}: telefone administrativo visível fora do contato`);
    check(!visibleText.includes('(11) 99329-2873'), `${relativeFile}: telefone financeiro visível fora do contato`);
  }

  for (const anchor of html.match(/<a\b[^>]*>/gi) ?? []) {
    const href = attribute(anchor, 'href');
    if (!href) continue;

    if (attribute(anchor, 'target') === '_blank') {
      const rel = new Set((attribute(anchor, 'rel') ?? '').split(/\s+/));
      check(rel.has('noopener') && rel.has('noreferrer'), `${relativeFile}: nova guia sem noopener/noreferrer`);
    }

    if (href.startsWith('#') || /^(?:https?:|mailto:|tel:)/i.test(href)) continue;
    const pathname = new URL(href, 'https://site.local').pathname;
    const localPath = pathname.replace(/^\/+/, '');
    const target = pathname === '/'
      ? join(distDir, 'index.html')
      : pathname.endsWith('.html')
        ? join(distDir, localPath)
        : join(distDir, localPath, 'index.html');
    internalLinks += 1;
    check(existsSync(target), `${relativeFile}: link interno sem destino ${pathname}`);
  }

  for (const match of html.matchAll(scriptPattern)) {
    const [, attributes, content] = match;
    const type = attributes.match(/\btype\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase();

    if (type === 'application/ld+json') {
      jsonLdBlocks += 1;
      try {
        JSON.parse(content);
      } catch {
        failures.push(`${relativeFile}: JSON-LD inválido`);
      }
      continue;
    }

    if (/\bsrc\s*=/i.test(attributes) || content.length === 0) continue;
    if (type && !executableTypes.has(type)) continue;
    const digest = createHash('sha256').update(content, 'utf8').digest('base64');
    executableHashes.add(`'sha256-${digest}'`);
  }
}

const manifestPath = join(distDir, 'manifest.webmanifest');
check(existsSync(manifestPath), 'manifest.webmanifest ausente');
if (existsSync(manifestPath)) {
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  check(Array.isArray(manifest.icons) && manifest.icons.length > 0, 'manifesto sem ícones');
}

const contactHtml = readFileSync(join(distDir, 'contato/index.html'), 'utf8');
check(contactHtml.includes('data-wa-fallback'), 'contato: fallback do WhatsApp ausente');
check(contactHtml.includes('aria-describedby="phone-hint"'), 'contato: instrução acessível do telefone ausente');
check(/id="phone"[^>]*pattern=/i.test(contactHtml), 'contato: validação de telefone ausente');
check(contactHtml.includes('wa.me/5511965862473'), 'contato: WhatsApp administrativo incorreto');
check(contactHtml.includes('wa.me/5511993292873'), 'contato: WhatsApp financeiro incorreto');
check(contactHtml.includes('(11) 96586-2473'), 'contato: telefone administrativo ausente');
check(contactHtml.includes('(11) 99329-2873'), 'contato: telefone financeiro ausente');

const homeHtml = readFileSync(join(distDir, 'index.html'), 'utf8');
const socialImagePath = join(distDir, 'images/og-v2.jpg');
check(/property="og:image" content="[^"]+\/images\/og-v2\.jpg"/i.test(homeHtml), 'home: imagem Open Graph atual ausente');
check(homeHtml.includes('property="og:image:width" content="1200"'), 'home: largura Open Graph ausente');
check(homeHtml.includes('property="og:image:height" content="630"'), 'home: altura Open Graph ausente');
check(/property="og:image:alt" content="[^"]+"/i.test(homeHtml), 'home: descrição Open Graph ausente');
check(/name="twitter:image:alt" content="[^"]+"/i.test(homeHtml), 'home: descrição Twitter ausente');
check(existsSync(socialImagePath), 'imagem Open Graph ausente no build');
if (existsSync(socialImagePath)) {
  check(statSync(socialImagePath).size <= 200 * 1024, 'imagem Open Graph acima de 200 KiB');
}

const clientAreaHtml = readFileSync(join(distDir, 'area-do-cliente/index.html'), 'utf8');
check(/name="robots" content="noindex, nofollow"/i.test(clientAreaHtml), 'área do cliente: noindex ausente');
check(clientAreaHtml.includes('Em desenvolvimento'), 'área do cliente: status de desenvolvimento ausente');

const cspPath = join(projectRoot, 'csp.conf');
check(existsSync(cspPath), 'csp.conf ausente');
if (existsSync(cspPath)) {
  const csp = readFileSync(cspPath, 'utf8');
  const scriptDirective = csp.match(/script-src[^;]+/)?.[0] ?? '';
  check(!scriptDirective.includes("'unsafe-inline'"), 'CSP: script-src ainda permite unsafe-inline');
  for (const hash of executableHashes) {
    check(scriptDirective.includes(hash), `CSP: hash não coberto ${hash}`);
  }
}

if (failures.length > 0) {
  console.error(`Validação falhou com ${failures.length} problema(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Validação concluída: ${expectedPages.length} páginas, ${internalLinks} links internos, ${jsonLdBlocks} JSON-LD e ${executableHashes.size} hashes CSP.`,
);
