import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const distDir = join(projectRoot, 'dist');
const expectedPages = [
  'index.html',
  '404.html',
  'clientes/index.html',
  'contato/index.html',
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
  check(/<html\b[^>]*\blang=["']pt-BR["']/i.test(html), `${relativeFile}: idioma pt-BR ausente`);
  check((html.match(/<h1\b/gi) ?? []).length === 1, `${relativeFile}: deve existir exatamente um H1`);
  check(/<meta\b[^>]*\bname=["']description["'][^>]*\bcontent=["'][^"']+["']/i.test(html), `${relativeFile}: description ausente`);
  check(/<link\b[^>]*\brel=["']canonical["'][^>]*\bhref=["']https:\/\//i.test(html), `${relativeFile}: canonical HTTPS ausente`);

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
