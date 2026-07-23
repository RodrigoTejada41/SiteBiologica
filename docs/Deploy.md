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

## Demonstração externa de 2026-07-20

- URL: `https://172-238-213-72.sslip.io/`.
- Uso: apresentação temporária ao cliente.
- Proxy TLS: Caddy em container separado.
- Aplicação atual: imagem `evolucao-site:20260723-180820`, container `site-evolucao-v2`.
- HTTPS: certificado público e renovação automática.
- Domínio oficial e DNS: não alterados.
- HSTS: não ativado no host temporário.

## Atualização da demonstração em 2026-07-23

- Release: `/opt/evolucao-site/releases/20260723-180820`.
- Publicado o catálogo `/catalogo-de-pragas/`.
- Validação externa: home, catálogo, detalhes de pragas, `robots.txt` e `sitemap-index.xml` com HTTP 200.
- Varredura do catálogo: 31 links de detalhe e 31 imagens locais sem falha.

Procedimento, verificação e rollback: [DEMO_VPS.md](./DEMO_VPS.md).

Checklist detalhado anterior: [PUBLICACAO.md](./PUBLICACAO.md).
