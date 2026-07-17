# Segurança

## Superfície atual

- Site estático, sem autenticação, banco ou API.
- Dependências JavaScript verificadas sem vulnerabilidades conhecidas na auditoria.
- Sem `innerHTML`, `eval`, `document.write`, armazenamento de segredos ou scripts externos do projeto.
- Links em nova guia usam `noopener noreferrer`.

## Achados

### SEC-001 — CSP permite script inline

- **Severidade:** média.
- **Local:** `site-v2/nginx.conf:20`.
- **Evidência:** `script-src 'self' 'unsafe-inline'`.
- **Impacto:** enfraquece defesa em profundidade contra XSS futuro.
- **Correção:** externalizar scripts executáveis ou usar hashes; remover `unsafe-inline` após teste completo.

### SEC-002 — HSTS fora do terminador TLS

- **Severidade:** média operacional.
- **Local:** `site-v2/nginx.conf:21`.
- **Evidência:** um ano com `includeSubDomains` no servidor HTTP interno.
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
