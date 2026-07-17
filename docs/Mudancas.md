# Registro de mudanças

Cada registro deve informar data, arquivo, motivo, antes, depois, benefício e impacto.

## 2026-07-16 — Governança documental

| Campo | Registro |
|---|---|
| Arquivos | `docs/*.md` |
| Motivo | Padronizar análise, decisões, execução, validação e manutenção |
| Antes | Auditoria, modernização e publicação em documentos isolados |
| Depois | Índice central e documentos por responsabilidade |
| Benefício | Rastreabilidade e continuidade do projeto |
| Impacto | Apenas documentação; sem mudança no site |

## 2026-07-16 — Acabamento responsivo e metadados sociais

| Campo | Registro |
|---|---|
| Status | Concluída e validada em 768×1024 |
| Arquivos | `global.css`, `BaseLayout.astro`, `manifest.webmanifest` |
| Motivo | A arte antiga do hero aparecia no tablet; metadados sociais e manifesto estavam incompletos |
| Antes | Texto e segunda logomarca podiam aparecer no recorte; apenas `twitter:card`; manifesto sem ícones |
| Depois | Recorte temporário controlado, metadados explícitos e favicon vetorial declarado |
| Benefício | Consistência visual e melhor apresentação em compartilhamento/instalação |
| Impacto | Visual e SEO social; sem alteração da identidade |
| Validação | Build Astro, `npm audit` sem vulnerabilidades e captura Playwright em tablet |

## 2026-07-16 — Robustez do contato

| Campo | Registro |
|---|---|
| Status | Concluída e validada |
| Arquivos | `site.ts`, `Footer.astro`, `contato.astro`, `global.css` |
| Motivo | Evitar falsa confirmação quando o pop-up é bloqueado e melhorar a qualidade do telefone informado |
| Antes | `window.open` sem verificação, telefone sem formato mínimo e endereço sem ação de mapa |
| Depois | Fallback explícito, validação permissiva, instrução acessível e link “Como chegar” |
| Benefício | Menor perda de contato e navegação local mais direta |
| Impacto | UX, acessibilidade, conversão e SEO local; sem armazenamento de dados |
| Validação | Build Docker; Playwright com telefone inválido e pop-up bloqueado; fallback visível e focado |

## 2026-07-16 — Conteúdo estruturado dos serviços

| Campo | Registro |
|---|---|
| Status | Concluída e validada nas oito rotas |
| Arquivos | `site.ts`, `ServiceInformation.astro`, `[slug].astro`, `global.css` |
| Motivo | As páginas de serviço tinham apenas um parágrafo específico e pouca orientação antes do contato |
| Antes | Resumo, indicação e CTA |
| Depois | Sinais, abordagem, preparação, cuidados, FAQ e Schema estruturados |
| Benefício | Mais clareza, conteúdo único, SEO e conversão contextual |
| Impacto | Oito rotas de serviço; texto cauteloso sem promessas ou credenciais inventadas |
| Validação | Build Astro; 500–570 palavras por rota; JSON-LD válido; Playwright em 1440×900 e 390×844 |

## Modelo

```text
Data:
Arquivo:
Motivo:
Antes:
Depois:
Benefícios:
Impacto:
Validação:
Commit:
```
