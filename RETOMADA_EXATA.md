# Retomada exata

Abra este arquivo primeiro ao retomar o projeto.

## Estado atual

- Branch: `main`.
- Site V2: Astro 7, estático e servido por Nginx.
- Página institucional `/quem-somos/` concluída com história, missão, visão e valores.
- Navegação da página inicial, cabeçalho e rodapé atualizados.
- Demo externa ativa com HTTPS válido em `https://172-238-213-72.sslip.io/`.
- Domínio oficial `evolucaobiologica.com` não foi alterado e não aponta para a VPS de demonstração.
- Estado detalhado: `docs/ESTADO_ATUAL_PROJETO.md`.
- Infraestrutura da demo: `docs/DEMO_VPS.md`.

## Última validação

```powershell
cd E:\Projetos\EvolucaoSite\site-v2
npm.cmd test
```

Resultado: 16 rotas geradas; validador aprovado com 15 páginas, 273 links internos, 24 blocos JSON-LD e quatro hashes CSP.

Validação externa:

- `/`, `/quem-somos/`, `/servicos/`, `/robots.txt` e `/sitemap-index.xml`: HTTP 200.
- HTTP da demonstração: redirecionamento 308 para HTTPS.
- Página e CSS via HTTPS: HTTP 200.
- Containers `site-evolucao-v2` e `evolucao-https` ativos; aplicação marcada como saudável.

## Próximo passo recomendado

1. Obter o aceite do cliente pela URL de demonstração.
2. Somente após autorização explícita, definir publicação oficial, alterar DNS e configurar o domínio real.
3. Antes de qualquer nova publicação, executar `npm.cmd test` e revisar `git status --short --branch`.

## Âncora Git

Este checkpoint pertence ao commit mais recente da branch `main`. Confirmar com:

```powershell
git log -1 --oneline
git status --short --branch
```

Nenhuma senha, chave SSH ou credencial da VPS foi registrada no repositório.
