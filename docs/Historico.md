# Histórico

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
