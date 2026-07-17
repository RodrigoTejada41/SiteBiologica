# Checklist de publicação

## Pré-requisitos

- Confirmar acesso ao domínio `evolucaobiologica.com` e ao provedor DNS.
- Definir o servidor que executará o container.
- Fazer backup do site e banco atuais antes da troca.
- Confirmar autorização dos logotipos exibidos.
- Confirmar licenças, certificações, responsável técnico e garantias antes de publicá-los.

## Implantação

1. Publicar a imagem construída pelo `site-v2/Dockerfile`.
2. Configurar proxy reverso para o container na porta 80 interna.
3. Ativar HTTPS para domínio principal e `www`.
4. Redirecionar HTTP para HTTPS e escolher um único domínio canônico.
5. Validar os redirecionamentos das URLs antigas:
   - `/index.html` → `/`
   - `/servicos.html` → `/servicos/`
   - `/clientes.html` → `/clientes/`
   - `/contato.html` → `/contato/`
6. Confirmar que `/robots.txt` e `/sitemap-index.xml` respondem com status 200.
7. Testar WhatsApp, telefones, e-mail, formulário e página 404.

## Pós-publicação

- Cadastrar o domínio no Google Search Console.
- Enviar `https://evolucaobiologica.com/sitemap-index.xml`.
- Monitorar indexação, Core Web Vitals e erros 404.
- Configurar métricas de conversão somente com política e consentimento adequados.
- Manter o backup anterior disponível durante o período de estabilização.
