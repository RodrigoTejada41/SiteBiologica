# Modernização do site

## Status

- Site original preservado em `http://localhost:8082/`.
- Versão modernizada disponível em `http://localhost:8083/`.
- 14 rotas estáticas, container saudável e formulário com validação e fallback via WhatsApp.
- Logomarca e cores institucionais preservadas.

## Diagnóstico e prioridade

| Prioridade | Problema original | Solução aplicada |
|---|---|---|
| Alta | Ausência de hierarquia, H1 e CTA claro | Hero com proposta, contexto e dois caminhos de conversão |
| Alta | Mobile lento e imagens pesadas | Imagens responsivas em WebP, carregamento tardio e CSS próprio |
| Alta | Acessibilidade insuficiente | HTML semântico, foco visível, skip link, contraste e movimento reduzido |
| Alta | SEO incompleto | Metadados, canonical, sitemap, robots e dados estruturados |
| Alta | Formulário PHP inseguro/inutilizável | Formulário local que prepara mensagem no WhatsApp sem armazenar dados |
| Média | Serviços pouco organizados | Grade, páginas individuais e conteúdo orientado à necessidade |
| Média | Pouca confiança visual | Processo explícito, canais reais e clientes já existentes no acervo |
| Média | Navegação antiga | Cabeçalho fixo, estado ativo e menu móvel acessível |
| Baixa | Interações estáticas | Revelações suaves, hover funcional e respeito a `prefers-reduced-motion` |

## Direção visual

Marca técnica e confiável, com presença dominante do verde institucional, áreas claras, fotografia real e comunicação direta. A logomarca não foi redesenhada e as cores principais não foram substituídas.

## Wireframe da página inicial

1. Cabeçalho: logo, Início, Serviços, Clientes, Contato e CTA.
2. Hero: proposta principal, explicação, orçamento e acesso aos serviços.
3. Faixa de confiança: residencial, empresas e contato direto.
4. Serviços em destaque.
5. Sobre/forma de atendimento.
6. Processo em três etapas.
7. Clientes.
8. Perguntas frequentes.
9. CTA final.
10. Rodapé com canais, horário, navegação e privacidade.

## Funcionalidades implementadas

- Menu responsivo e indicação da página ativa.
- CTA de WhatsApp em pontos de decisão.
- Barra móvel de contato exibida após rolagem.
- Formulário com validação nativa e mensagem pré-preenchida no WhatsApp.
- Páginas individuais para oito serviços.
- FAQ com dados estruturados.
- Página 404 e política de privacidade.
- Sitemap automático, robots, Open Graph e Organization schema.
- Otimização automática de imagens e cache de arquivos versionados.
- Cabeçalhos de segurança no Nginx.
- Conteúdo aprofundado e FAQ para os oito serviços.
- CSP estrita com hashes gerados a cada build.
- Teste automático de páginas, links, metadados, JSON-LD e CSP.
- Fotografia limpa no hero e Open Graph 1200×630.
- Menu móvel com fechamento por `Esc`, retorno de foco e contenção de foco.

## Tecnologias

- Astro 7 e TypeScript.
- HTML estático e CSS próprio, sem framework visual pesado.
- `astro:assets` para imagens responsivas.
- Nginx em container multi-stage.
- Docker Compose para comparação isolada entre legado e V2.

## Métricas locais

### Site original — auditoria móvel

- Performance: 67.
- Acessibilidade: 71.
- Boas práticas: 62.
- SEO: 82.
- LCP: 17,1 s.

### V2 — auditoria móvel

- Performance: 93.
- Acessibilidade: 100.
- SEO: 100.
- LCP: 2,9 s.
- CLS: 0.

A pontuação local de boas práticas é afetada por um script injetado pelo Kaspersky no navegador de auditoria. O script não pertence ao projeto.

## Cronograma por prioridade

1. **Concluído — base técnica e UX:** arquitetura, design, páginas, SEO, acessibilidade, performance e container.
2. **Concluído — conteúdo e segurança:** serviços aprofundados, contato resiliente, SEO local, CSP estrita e testes automáticos.
3. **Próxima etapa — validação institucional:** confirmar licenças, certificações, responsável técnico, garantias e autorização dos logotipos.
4. **Concluído — ativos visuais:** fotografia limpa do hero, composição móvel full-bleed e Open Graph 1200×630.
5. **Fase final:** configurar domínio, DNS, HTTPS, redirecionamentos e monitoramento após o aceite do site.
6. **Pós-publicação:** Search Console, métricas de conversão consentidas e ajustes baseados em dados reais.

Checklist operacional: [`PUBLICACAO.md`](./PUBLICACAO.md).

## Dados que exigem confirmação

- Licenças, certificações, responsável técnico e garantias.
- Autorização de uso dos logotipos de clientes.
- Estatísticas e depoimentos.
- Alegação de aplicação sem necessidade de evacuação do local.
