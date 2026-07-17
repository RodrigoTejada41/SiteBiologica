# Site Evolução Biológica — versão modernizada

Site institucional estático desenvolvido com Astro.

## Desenvolvimento

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

O build gera a CSP com hashes dos scripts inline. Para validar páginas, links, SEO, JSON-LD e CSP:

```sh
npm test
npm audit
```

## Container local

Na raiz do projeto:

```sh
docker compose up -d --build site-v2
```

- Versão modernizada: `http://localhost:8083/`
- Site legado: `http://localhost:8082/`

## Estrutura

- `src/pages`: páginas e rotas.
- `src/components`: componentes reutilizáveis.
- `src/data/site.ts`: dados institucionais, serviços e clientes.
- `src/styles/global.css`: tokens e sistema visual.
- `public`: logo, favicon, Open Graph, robots e manifesto.
