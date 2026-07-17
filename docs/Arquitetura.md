# Arquitetura

## Visão geral

Site institucional estático, gerado por Astro e servido por Nginx. Não existe backend, autenticação ou banco de dados na V2.

```text
Astro 7 + TypeScript
  ├─ pages: rotas estáticas
  ├─ layouts: estrutura HTML, SEO e dados globais
  ├─ components: navegação, cards, clientes e CTAs
  ├─ data: conteúdo institucional tipado
  ├─ assets: imagens processadas pelo Astro
  └─ styles: tokens e estilos globais
          ↓ astro build
     HTML/CSS/JS/imagens versionadas
          ↓
        Nginx
```

## Tecnologias

- Astro 7.1.0.
- TypeScript em modo estrito.
- CSS próprio e Manrope variável hospedada localmente.
- `astro:assets` para imagens responsivas.
- `@astrojs/sitemap` para sitemap.
- Nginx 1.29 em imagem Docker multi-stage.
- Docker Compose para legado e V2 isolados.

## Responsabilidades

- `src/data/site.ts`: dados confirmados da empresa, serviços e clientes.
- `src/layouts/BaseLayout.astro`: documento, metadados e estrutura global.
- `src/components`: fragmentos reutilizáveis e sem regra de negócio.
- `src/pages`: composição de cada rota.
- `src/styles/global.css`: tokens, layout, estados, responsividade e movimento.
- `nginx.conf`: cache, redirecionamentos, erros e cabeçalhos HTTP.

## Restrições

- Não alterar logomarca ou cores institucionais.
- Não publicar alegações, credenciais ou estatísticas não comprovadas.
- Não adicionar backend sem necessidade de negócio e política de dados definidas.
- Não adicionar framework visual ou dependência pesada sem ganho mensurável.
