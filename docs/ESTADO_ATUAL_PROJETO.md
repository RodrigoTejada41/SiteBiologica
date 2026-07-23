# Estado atual do projeto

Atualizado em 2026-07-23.

## Produto

- Site institucional V2 concluído em Astro 7 e TypeScript.
- Página `/quem-somos/` incorporada com conteúdo fornecido pelo cliente.
- Missão, visão e os sete valores institucionais publicados.
- Página inicial contém resumo institucional e acesso para a página completa.
- Cabeçalho e rodapé incluem “Quem somos” e “Catálogo de pragas”.
- Catálogo público de pragas publicado em `/catalogo-de-pragas/`, com 31 páginas de detalhe.
- Imagens do catálogo servidas localmente por `/images/pragas/` para evitar falhas de origem externa.
- Layout responsivo usa os estilos, tokens, imagens e animações existentes.
- Site continua estático, sem banco de dados, autenticação ou backend.

## Ambientes

| Ambiente | Endereço | Estado |
|---|---|---|
| Desenvolvimento Astro | `http://127.0.0.1:4321/` | Iniciado manualmente quando necessário |
| Docker local V2 | `http://localhost:8083/` | Configuração preservada em `compose.yaml` |
| Demonstração externa | `https://172-238-213-72.sslip.io/` | Ativo com HTTPS e renovação automática |
| Produção oficial | `https://evolucaobiologica.com/` | Não alterada por esta fase |

O domínio oficial continuava resolvendo para `186.234.81.26` durante a publicação da demo. A VPS de demonstração usa `172.238.213.72`.

## Infraestrutura da demo

- Ubuntu 26.04 LTS.
- Docker instalado na VPS.
- Imagem do site: `evolucao-site:20260723-180820`.
- Aplicação: container `site-evolucao-v2`.
- TLS e proxy: container `evolucao-https`, baseado em Caddy.
- Rede Docker: `evolucao-demo`.
- Certificado público emitido automaticamente para `172-238-213-72.sslip.io`.
- Firewall permite somente OpenSSH, HTTP e HTTPS nas regras configuradas.
- Fonte enviada para `/opt/evolucao-site/releases/20260723-180820`.
- Link atual: `/opt/evolucao-site/current`.

Detalhes operacionais e rollback: `docs/DEMO_VPS.md`.

## Validação confirmada

- `npm.cmd test` aprovado.
- Build gerou 48 rotas, incluindo a página 404 e o catálogo de pragas.
- Validador confirmou 21 páginas, 461 links internos, 36 blocos JSON-LD e cinco hashes CSP.
- Build Docker executado na VPS sem vulnerabilidades npm reportadas.
- Container da aplicação saudável.
- HTTP redireciona para HTTPS.
- Página `/quem-somos/` e seu CSS respondem com HTTP 200 via HTTPS.
- Catálogo `/catalogo-de-pragas/` responde com HTTP 200 via HTTPS.
- 31 páginas de detalhe de pragas respondem com HTTP 200.
- 31 imagens locais de pragas respondem com HTTP 200.
- HTML público verificado sem mojibake (`Ã`, `Â` ou caractere inválido).
- `robots.txt` e `sitemap-index.xml` respondem com HTTP 200.

## Limites e pendências

- `sslip.io` é adequado somente para demonstração e depende de um serviço DNS externo.
- O domínio oficial, DNS, Search Console e publicação definitiva continuam pendentes de autorização.
- HSTS não foi ativado para evitar aplicar política definitiva a um host temporário.
- Credenciais não estão documentadas. O acesso à VPS deve ser obtido pelo responsável autorizado.
