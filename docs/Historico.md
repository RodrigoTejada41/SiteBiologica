# Histórico

## 2026-07-17

- Textos de todas as páginas revisados para uma linguagem mais profissional, objetiva e orientada à conversão.
- Cards de serviços receberam descrições com problema, solução e benefício, além de altura uniforme, espaçamento, hover, foco visível e imagens padronizadas.
- Nomenclaturas dos serviços atualizadas conforme o vocabulário técnico da Anvisa e da RDC 622/2022, preservando termos populares nas descrições para busca e compreensão.
- Serviço de limpeza e desinfecção de caixas d'água incorporado ao catálogo.
- Selo Prêmio Quality Brasil aprimorado, preservado também em sua versão original e incorporado como prova visual no hero da página inicial e no rodapé.
- Fotografia original do hero foi mantida; o selo funciona como elemento complementar e responsivo.
- Build e validação aprovados: 14 páginas, 202 links internos, 23 blocos JSON-LD e quatro hashes CSP.
- Container local reconstruído e validado como saudável em `http://localhost:8083/`; nenhuma publicação externa realizada.
- Botão “Área do cliente” adicionado ao cabeçalho e ao rodapé, com página responsiva de desenvolvimento em `/area-do-cliente/`.
- Página futura do portal marcada como `noindex, nofollow`, sem formulário de acesso ou funcionalidade simulada.
- Validação ampliada para 15 páginas, 242 links internos, 24 blocos JSON-LD e quatro hashes CSP.
- Paleta digital atualizada para verde-bandeira `#009C3B`, com tons derivados mais escuros para preservar contraste e acessibilidade.
- Telefones fixos antigos removidos; contatos centralizados em WhatsApp administrativo `(11) 96586-2473` e financeiro `(11) 99329-2873`.
- Números deixaram de aparecer no rodapé e nas páginas globais, permanecendo visíveis somente em `/contato/`; CTAs genéricos continuam direcionando ao WhatsApp administrativo.
- Formulário de orçamento corrigido para impedir o esticamento desigual entre campos da mesma linha.
- Todas as 15 rotas foram verificadas no Chrome; alinhamento do formulário aprovado em desktop e celular.

## 2026-07-16

- Auditoria multidisciplinar concluída.
- Baseline Lighthouse registrado.
- Arquitetura confirmada como Astro estático + Nginx.
- Riscos principais identificados: hero antigo, conteúdo superficial, confiança não verificável, fallback do WhatsApp, CSP e HSTS.
- Governança documental criada antes da nova fase de implementação.
- Recorte temporário do hero validado em tablet, sem exibir texto ou logomarca embutidos.
- Metadados do Twitter e ícone vetorial do manifesto adicionados.
- Formulário passou a validar telefone e recuperar bloqueio de pop-up com link focado.
- Link “Como chegar” adicionado ao contato e rodapé.
- Oito páginas de serviço ampliadas com sinais, abordagem, preparação, cuidados e FAQ.
- Dados `Service` e `FAQPage` consolidados em JSON-LD por rota.
- CSP passou a aceitar somente scripts próprios com hashes gerados no build.
- HSTS removido do container HTTP e reservado ao proxy HTTPS de produção.
- Validador automático adicionado para páginas, links, SEO, JSON-LD, formulário, manifesto e CSP.
- Lighthouse final: móvel 93/100 em performance e 100/100 em acessibilidade/SEO; desktop 100/100 nas três categorias.
- Banner antigo substituído por fotografia limpa gerada para o projeto, sem texto ou logomarca incorporados.
- Hero móvel transformado em composição full-bleed que cabe no primeiro viewport em celular e tablet.
- Open Graph 1200×630 criado com a logomarca original e metadados de dimensão/descrição.
- Menu móvel passou a fechar com `Esc`, devolver foco ao botão e conter a navegação por `Tab`.
- Lighthouse repetido após a fase visual: móvel 93 e desktop 100 em performance; acessibilidade e SEO 100 em ambos.

## Marcos anteriores

- `72106ab` — modernização inicial do site institucional.
- `3bfc4ae` — horário e endereço atualizados.
- `bdf361d` — preparação de publicação e redirects legados.
- `39a368a` — correção do redirect da página inicial.
