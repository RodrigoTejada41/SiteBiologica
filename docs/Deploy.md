# Deploy

## Build

```sh
cd site-v2
npm ci
npm run build
```

O build também gera `csp.conf` com hashes dos scripts executáveis do HTML final. A imagem Docker copia esse arquivo para o Nginx.

## Container local

```sh
docker compose up -d --build site-v2
docker compose ps
```

## Produção

1. Gerar a imagem pelo `site-v2/Dockerfile`.
2. Publicar atrás de proxy HTTPS.
3. Redirecionar HTTP para HTTPS e definir domínio canônico.
4. Aplicar HSTS somente após validar todos os subdomínios.
5. Validar rotas legadas, sitemap, robots, 404 e contatos.
6. Manter imagem anterior disponível para rollback.

Checklist detalhado anterior: [PUBLICACAO.md](./PUBLICACAO.md).
