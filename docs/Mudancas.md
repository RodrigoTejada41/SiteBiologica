# Registro de mudanças

Cada registro deve informar data, arquivo, motivo, antes, depois, benefício e impacto.

## 2026-07-17 — Contatos e alinhamento do orçamento

| Campo | Registro |
|---|---|
| Status | Concluída, testada e publicada no ambiente local |
| Arquivos | `site.ts`, `contato.astro`, `Footer.astro`, `BaseLayout.astro`, `global.css`, `validate-build.mjs` |
| Motivo | Remover telefones fixos desativados, restringir a exibição dos números à página de contato e corrigir campos desalinhados |
| Antes | Fixos `(11) 5932-5173` e `(11) 5662-8235`; telefones repetidos no rodapé; campo “Nome” esticado pelo texto auxiliar do telefone |
| Depois | WhatsApp administrativo `(11) 96586-2473` e financeiro `(11) 99329-2873` visíveis somente em `/contato/`; controles da mesma linha alinhados pelo topo |
| Benefício | Contatos corretos, menor duplicação visual e formulário consistente em desktop e celular |
| Impacto | CTAs e formulário de orçamento continuam usando o WhatsApp administrativo; financeiro possui link próprio na página de contato |
| Validação | `npm test`; 15 rotas inspecionadas no Chrome; geometria dos campos validada em 806×805 e 390×844; container saudável em `http://localhost:8083/` |

## 2026-07-17 — Paleta verde-bandeira

| Campo | Registro |
|---|---|
| Status | Concluída e validada localmente |
| Arquivos | `global.css`, `BaseLayout.astro`, `manifest.webmanifest` |
| Motivo | Adotar o verde-bandeira solicitado como cor principal do site |
| Antes | Verde principal `#19A94B` e escala institucional anterior |
| Depois | Verde-bandeira `#009C3B` como base; tons `#00752D` e `#005E24` em fundos e CTAs com texto branco |
| Benefício | Identidade cromática mais alinhada à preferência do cliente sem perda de legibilidade |
| Impacto | Botões, fundos, destaques, tema do navegador e manifesto; logomarca original preservada |
| Validação | Build automatizado, contraste da escala e conferência visual desktop/mobile |

## 2026-07-17 — Área do cliente em desenvolvimento

| Campo | Registro |
|---|---|
| Status | Concluída e publicada somente no ambiente local |
| Arquivos | `Header.astro`, `Footer.astro`, `area-do-cliente.astro`, `global.css`, `validate-build.mjs` |
| Motivo | Preparar o acesso futuro dos clientes às ordens de serviço do CRM em desenvolvimento |
| Antes | Site sem entrada para o futuro portal do cliente |
| Depois | Botão destacado no cabeçalho, link no rodapé e página informativa com status, recursos planejados e contato atual |
| Benefício | Comunica a evolução do serviço sem criar expectativa de login já disponível |
| Impacto | Nova rota estática, responsiva e marcada como `noindex, nofollow`; nenhuma autenticação ou integração implementada nesta fase |
| Validação | `npm test`: 15 páginas, 242 links internos, 24 JSON-LD e quatro hashes CSP; Playwright em 1440×900 e 390×844 |

## 2026-07-17 — Conteúdo institucional e catálogo de serviços

| Campo | Registro |
|---|---|
| Status | Concluído e validado |
| Arquivos | `site.ts`, componentes de conteúdo e páginas institucionais |
| Motivo | Tornar a comunicação mais profissional, clara, persuasiva e compatível com a nomenclatura técnica atual |
| Antes | Descrições genéricas, termos inconsistentes e benefícios pouco explícitos |
| Depois | Copy revisada em todo o site; serviços nomeados como controle de pragas urbanas, controle de insetos, controle de roedores, controle de cupins, manejo de pombos, controle integrado, limpeza de caixas d'água e desinfecção de ambientes |
| Benefício | Compreensão imediata, maior credibilidade, melhor intenção de busca e conversão |
| Impacto | Conteúdo, SEO e experiência; termos populares preservados naturalmente para orientação e busca |
| Validação | `npm test`: 14 páginas, 202 links internos, 23 JSON-LD e quatro hashes CSP |

## 2026-07-17 — Refinamento dos cards de serviços

| Campo | Registro |
|---|---|
| Status | Concluído e validado |
| Arquivos | `ServiceCard.astro`, `global.css` |
| Motivo | Melhorar leitura, consistência visual, acessibilidade e resposta à interação |
| Antes | Espaçamento irregular, CTA genérico e transições menos consistentes |
| Depois | Altura uniforme, padding responsivo, título e descrição equilibrados, CTA mais claro, foco visível, elevação suave, sombra e zoom de 250 ms |
| Benefício | Escaneabilidade, percepção de qualidade e maior clareza de ação |
| Impacto | Todas as grades de serviços, sem alterar grid, identidade ou responsividade |
| Validação | Build Astro e verificação responsiva local |

## 2026-07-17 — Selo Prêmio Quality Brasil

| Campo | Registro |
|---|---|
| Status | Concluído e validado |
| Arquivos | `src/assets/brand/`, `index.astro`, `Footer.astro`, `global.css` |
| Motivo | Incorporar a prova visual fornecida sem substituir a fotografia ou a identidade existentes |
| Antes | Selo ausente do site e arquivo original em baixa resolução |
| Depois | Versão aprimorada e original preservadas; selo sobreposto à fotografia do hero e exibido no rodapé, com tamanhos responsivos e texto alternativo |
| Benefício | Maior destaque institucional e confiança, mantendo a imagem principal intacta |
| Impacto | Página inicial e rodapé; imagens convertidas e otimizadas para WebP pelo build |
| Validação | Verificação visual desktop/mobile e confirmação de fotografia e selo no HTML servido |

## 2026-07-17 — Publicação local consolidada

| Campo | Registro |
|---|---|
| Status | Concluída |
| Arquivos | Imagem Docker local `evolucaosite-site-v2` |
| Motivo | Disponibilizar a versão aprovada apenas no ambiente local |
| Antes | Container com versão anterior do site |
| Depois | Container reconstruído e saudável em `http://localhost:8083/` |
| Benefício | Versão completa disponível para conferência sem alterar produção |
| Impacto | Somente Docker local; nenhum arquivo enviado à internet |
| Validação | HTTP 200 em `/`, `/servicos/`, `/contato/` e `/clientes/` |

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

## 2026-07-16 — CSP estrita e HSTS no ponto correto

| Campo | Registro |
|---|---|
| Status | Concluída no ambiente local |
| Arquivos | `generate-csp.mjs`, `package.json`, `Dockerfile`, `nginx.conf`, `.gitignore` |
| Motivo | Remover `unsafe-inline` de scripts sem quebrar os módulos Astro e evitar HSTS prematuro no servidor HTTP interno |
| Antes | CSP aceitava qualquer script inline; HSTS de um ano com subdomínios no container HTTP |
| Depois | Hashes SHA-256 gerados por build e HSTS reservado ao proxy HTTPS |
| Benefício | Defesa contra XSS mais forte e menor risco operacional de domínio |
| Impacto | Pipeline de build e cabeçalhos HTTP; sem mudança de interface |
| Validação | Quatro hashes gerados; `nginx -t`; headers via HTTP; menu e formulário via Playwright |

## 2026-07-16 — Validação automática do build

| Campo | Registro |
|---|---|
| Status | Concluída |
| Arquivos | `validate-build.mjs`, `package.json`, `docs/Testes.md` |
| Motivo | O projeto dependia apenas de verificações manuais e do build do Astro |
| Antes | Erros de links, metadados ou CSP podiam passar até a auditoria manual |
| Depois | Teste determinístico do HTML final e da política CSP |
| Benefício | Regressões detectadas antes do container e da publicação |
| Impacto | Desenvolvimento e CI futura; sem código enviado ao navegador |
| Validação | `npm test`: 14 páginas, 202 links internos, 23 JSON-LD e quatro hashes CSP |

## 2026-07-16 — Medição final local

| Campo | Registro |
|---|---|
| Status | Concluída |
| Arquivos | Relatórios locais em `output/auditoria-v2` e documentação |
| Motivo | Confirmar impacto acumulado das mudanças |
| Antes | Performance móvel 94, LCP 2,7 s |
| Depois | Performance móvel 93, LCP 2,8 s; desktop 100 e LCP 0,6 s |
| Benefício | Baseline atualizado para comparação pós-publicação |
| Impacto | Documentação; variação móvel de laboratório dentro de um ponto |

## 2026-07-16 — Hero definitivo e imagem social

| Campo | Registro |
|---|---|
| Status | Concluída e validada |
| Arquivos | `hero-v2.jpg`, `og-v2.jpg`, `index.astro`, `BaseLayout.astro`, `global.css` |
| Motivo | Remover texto e logomarca embutidos na arte antiga e concluir a apresentação social |
| Antes | Banner panorâmico antigo, recorte corretivo no tablet e Open Graph fora do formato recomendado |
| Depois | Fotografia limpa; hero full-bleed responsivo; Open Graph 1200×630 com logomarca original e metadados completos |
| Benefício | Aparência mais profissional, leitura consistente e prévia social controlada |
| Impacto | Design, responsividade, performance e SEO social; identidade institucional preservada |
| Validação | `npm test`, incluindo Open Graph; Playwright em 390×844, 768×1024 e 1440×900; Lighthouse móvel e desktop |

## 2026-07-16 — Acessibilidade do menu móvel

| Campo | Registro |
|---|---|
| Status | Concluída e validada |
| Arquivos | `Header.astro` |
| Motivo | O menu não respondia à tecla `Esc` e permitia que o foco saísse da navegação aberta |
| Antes | Abertura e fechamento apenas pelo botão ou link |
| Depois | `Esc` fecha, foco retorna ao botão e `Tab`/`Shift+Tab` permanecem no menu |
| Benefício | Navegação por teclado previsível e compatível com diálogo móvel de tela inteira |
| Impacto | Acessibilidade e UX; sem alteração visual |
| Validação | Playwright: último CTA focado com `Shift+Tab`; botão “Abrir menu” focado após `Esc` |

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
