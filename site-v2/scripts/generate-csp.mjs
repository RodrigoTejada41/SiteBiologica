import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const distDir = join(projectRoot, 'dist');
const outputFile = join(projectRoot, 'csp.conf');
const executableTypes = new Set(['application/javascript', 'text/javascript', 'module']);

const listHtmlFiles = (directory) =>
  readdirSync(directory).flatMap((name) => {
    const entry = join(directory, name);
    return statSync(entry).isDirectory()
      ? listHtmlFiles(entry)
      : entry.endsWith('.html')
        ? [entry]
        : [];
  });

const hashes = new Set();
const scriptPattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;

for (const file of listHtmlFiles(distDir)) {
  const html = readFileSync(file, 'utf8');

  for (const match of html.matchAll(scriptPattern)) {
    const [, attributes, content] = match;
    if (/\bsrc\s*=/i.test(attributes) || content.length === 0) continue;

    const type = attributes.match(/\btype\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase();
    if (type && !executableTypes.has(type)) continue;

    const digest = createHash('sha256').update(content, 'utf8').digest('base64');
    hashes.add(`'sha256-${digest}'`);
  }
}

if (hashes.size === 0) {
  throw new Error('Nenhum script executável inline foi encontrado para gerar a CSP.');
}

const policy = [
  "default-src 'self'",
  `script-src 'self' ${[...hashes].sort().join(' ')}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://commons.wikimedia.org",
  "font-src 'self' data:",
  "connect-src 'self'",
  "form-action 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ');

writeFileSync(outputFile, `add_header Content-Security-Policy "${policy}" always;\n`, 'utf8');
console.log(`CSP gerada com ${hashes.size} hashes de scripts executáveis.`);
