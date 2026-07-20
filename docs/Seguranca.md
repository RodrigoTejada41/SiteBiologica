# Segurança

## Superfície atual

- Site estático, sem autenticação, banco ou API.
- Dependências JavaScript verificadas sem vulnerabilidades conhecidas na auditoria.
- Sem `innerHTML`, `eval`, `document.write`, armazenamento de segredos ou scripts externos do projeto.
- Links em nova guia usam `noopener noreferrer`.

## Achados

### SEC-001 — CSP permite script inline

- **Severidade:** média.
- **Status:** corrigido.
- **Local:** `site-v2/scripts/generate-csp.mjs` e `site-v2/nginx.conf`.
- **Evidência atual:** `script-src 'self'` seguido apenas pelos hashes SHA-256 gerados após o build.
- **Impacto:** enfraquece defesa em profundidade contra XSS futuro.
- **Correção:** externalizar scripts executáveis ou usar hashes; remover `unsafe-inline` após teste completo.
- **Decisão de implementação:** gerar hashes SHA-256 do HTML final e incluir o arquivo resultante no Nginx.

### SEC-002 — HSTS fora do terminador TLS

- **Severidade:** média operacional.
- **Status:** corrigido no container.
- **Evidência atual:** o servidor HTTP interno não envia `Strict-Transport-Security`.
- **Impacto:** configuração prematura em produção pode bloquear subdomínios sem HTTPS.
- **Correção:** remover do container HTTP e configurar no proxy HTTPS somente após validação.

### SEC-003 — URL do WhatsApp

- **Severidade:** informativa.
- **Local:** `site-v2/src/pages/contato.astro:128-131`.
- **Evidência:** base e número são constantes; campos são codificados com `encodeURIComponent`.
- **Avaliação:** não há URL controlada integralmente pelo usuário. Manter allowlist implícita `https://wa.me/`.

## Regras para futuras integrações

- Segredos nunca devem chegar ao navegador ou ao repositório.
- Dados recebidos por backend devem ser validados no servidor.
- Evitar HTML dinâmico; usar `textContent` ou componentes.
- Minimizar scripts de terceiros; exigir política e consentimento quando aplicável.
- HTTPS será validado no domínio real, não no localhost.

## Demonstração HTTPS de 2026-07-20

- Certificado público válido emitido para `172-238-213-72.sslip.io`.
- Caddy encerra TLS e renova o certificado automaticamente.
- HTTP redireciona permanentemente para HTTPS.
- Firewall da VPS permite OpenSSH, HTTP e HTTPS.
- Aplicação permanece isolada na rede Docker e não publica porta diretamente no host.
- HSTS permanece desativado por se tratar de host temporário.
- Nenhuma credencial foi registrada no repositório.
