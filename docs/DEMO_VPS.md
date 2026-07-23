# Demonstração na VPS

## Objetivo

Disponibilizar o site atual para apresentação ao cliente sem alterar o domínio ou o ambiente oficial.

## Acesso

- URL segura: `https://172-238-213-72.sslip.io/`.
- VPS: `172.238.213.72`.
- O host `sslip.io` resolve automaticamente para o IP embutido no nome.
- O certificado TLS público é administrado e renovado automaticamente pelo Caddy.
- Não registrar senha, chave privada ou token neste documento.

## Topologia

```text
Internet :80/:443
       ↓
evolucao-https (Caddy)
       ↓ rede Docker evolucao-demo
site-evolucao-v2 (Nginx + arquivos Astro)
```

## Recursos instalados

| Recurso | Identificador |
|---|---|
| Release | `/opt/evolucao-site/releases/20260723-180820` |
| Link atual | `/opt/evolucao-site/current` |
| Imagem | `evolucao-site:20260723-180820` |
| Container do site | `site-evolucao-v2` |
| Container HTTPS | `evolucao-https` |
| Rede Docker | `evolucao-demo` |
| Volume de certificados | `evolucao_caddy_data` |
| Volume de configuração | `evolucao_caddy_config` |

## Verificação

Executar na VPS:

```sh
docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'
docker logs --tail 80 evolucao-https
ufw status
```

Executar de uma máquina externa:

```powershell
Invoke-WebRequest -Uri 'https://172-238-213-72.sslip.io/' -UseBasicParsing
Invoke-WebRequest -Uri 'https://172-238-213-72.sslip.io/quem-somos/' -UseBasicParsing
Invoke-WebRequest -Uri 'https://172-238-213-72.sslip.io/catalogo-de-pragas/' -UseBasicParsing
Invoke-WebRequest -Uri 'https://172-238-213-72.sslip.io/catalogo-de-pragas/lacraia/' -UseBasicParsing
Invoke-WebRequest -Uri 'https://172-238-213-72.sslip.io/robots.txt' -UseBasicParsing
Invoke-WebRequest -Uri 'https://172-238-213-72.sslip.io/sitemap-index.xml' -UseBasicParsing
```

Resultado esperado: HTTP 200. Uma chamada a `http://172-238-213-72.sslip.io/` deve retornar redirecionamento permanente para HTTPS.

## Incidente corrigido

O primeiro acesso direto por IP carregou HTML sem CSS ou imagens. A CSP do build contém `upgrade-insecure-requests`, apropriado para produção HTTPS; no acesso somente HTTP, o navegador tentou buscar os assets por HTTPS sem existir terminador TLS.

Correção aplicada: Caddy adicionado como proxy HTTPS com certificado público válido. O conteúdo e o layout do site não foram alterados.

## Atualização futura da demo

1. Validar localmente com `npm.cmd test`.
2. Criar uma nova release em `/opt/evolucao-site/releases/<data-hora>`.
3. Gerar uma nova imagem Docker com tag exclusiva.
4. Manter a imagem anterior para rollback.
5. Recriar somente `site-evolucao-v2` na rede `evolucao-demo`.
6. Confirmar saúde do container e HTTP 200 via HTTPS.

## Rollback

Em caso de falha, recriar o container do site usando a imagem anterior conhecida como estável. Não remover a imagem anterior antes da validação da nova versão.

```sh
docker stop site-evolucao-v2
docker rm site-evolucao-v2
docker run -d \
  --name site-evolucao-v2 \
  --network evolucao-demo \
  --restart unless-stopped \
  evolucao-site:20260720-1417
```

O proxy `evolucao-https` não precisa ser recriado durante rollback do conteúdo.

## Release 2026-07-23

- Release ativo: `/opt/evolucao-site/releases/20260723-180820`.
- Imagem Docker ativa: `evolucao-site:20260723-180820`.
- Container `site-evolucao-v2` validado como `healthy`.
- Catálogo público de pragas publicado em `/catalogo-de-pragas/`.
- 31 páginas de detalhe de pragas retornaram HTTP 200.
- 31 imagens locais em `/images/pragas/` retornaram HTTP 200.
- HTML público verificado sem mojibake (`Ã`, `Â` ou caractere inválido).
- Domínio oficial mantido sem alteração.

## Produção oficial

Esta demo não substitui a publicação oficial. Para produção:

1. Obter autorização explícita.
2. Alterar o DNS do domínio oficial.
3. Emitir certificado para o domínio real.
4. Validar redirecionamentos, canonical, Search Console e HSTS.
5. Remover a dependência de `sslip.io`.
