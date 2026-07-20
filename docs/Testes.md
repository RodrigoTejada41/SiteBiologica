# Testes

## Automáticos

```sh
cd site-v2
npm test
npm audit
```

`npm test` gera o site e valida:

- presença das páginas esperadas;
- idioma, H1, description e canonical;
- resolução de links internos;
- `rel="noopener noreferrer"` em novas guias;
- JSON-LD válido;
- manifesto com ícone;
- Open Graph atual, dimensões 1200×630, descrições alternativas e arquivo abaixo de 200 KiB;
- formulário com fallback e validação de telefone;
- cobertura dos scripts inline pelos hashes da CSP.

## Navegador

Playwright é usado manualmente para menu, teclado, formulário, pop-up bloqueado e viewports 390, 768 e 1440 px.

Validação desta fase:

- hero completo no primeiro viewport em 390×844, 768×1024 e 1440×900;
- menu móvel fecha com `Esc` e devolve foco ao botão;
- `Shift+Tab` no primeiro item permanece no menu;
- nenhum erro próprio do site no console;
- container saudável e com o mesmo digest da imagem Docker atual.

## Performance

Executar Lighthouse móvel e desktop sem extensões antes da publicação. O antivírus Kaspersky injeta um script no navegador local e pode reduzir “Boas práticas” sem relação com o projeto.

Resultado final local: móvel 93 em performance, 100 em acessibilidade e SEO; desktop 100 nas três categorias. Boas práticas: 81 nos dois perfis por interferência do Kaspersky.

## Validação de 2026-07-17

- `npm test` aprovado: 14 páginas, 202 links internos, 23 blocos JSON-LD e quatro hashes CSP.
- Imagens do selo e do hero geradas em WebP responsivo pelo Astro.
- Container `site-evolucao-v2` reconstruído e saudável em `http://localhost:8083/`.
- HTTP 200 confirmado em `/`, `/servicos/`, `/contato/` e `/clientes/`.
- HTML inicial confirmado com a fotografia `hero-v2` e o texto alternativo do selo.
- Publicação restrita ao ambiente local; produção não alterada.
- Área do cliente adicionada ao conjunto de testes: `noindex, nofollow` e mensagem “Em desenvolvimento” obrigatórios.
- Resultado após a nova rota: 15 páginas, 242 links internos, 24 blocos JSON-LD e quatro hashes CSP.
- Navegação para `/area-do-cliente/`, layout desktop 1440×900 e mobile 390×844 validados com Playwright.
- Menu móvel confirmado com os botões “Área do cliente” e “Solicitar orçamento”, fechamento por `Esc` e foco preservado.
- Validador garante que os números administrativo e financeiro não sejam exibidos fora de `/contato/`.
- Chrome percorreu as 15 rotas e confirmou ausência visual dos números fora da página de contato.
- Formulário conferido em 806×805 e 390×844: “Nome”/“Telefone” e “Serviço”/“Tipo de ambiente” alinhados; campos de largura total consistentes.
- Container `site-evolucao-v2` reconstruído após as correções e confirmado como saudável.

## Validação de 2026-07-20

- `npm test` aprovado após a criação de `/quem-somos/`.
- Build: 16 rotas geradas, incluindo a página 404.
- Validador: 15 páginas, 273 links internos, 24 blocos JSON-LD e quatro hashes CSP.
- Build Docker executado na VPS com zero vulnerabilidades npm reportadas.
- Container `site-evolucao-v2` confirmado como saudável.
- HTTP redireciona para HTTPS com status 308 no host de demonstração.
- `/`, `/quem-somos/`, `/servicos/`, `/robots.txt` e `/sitemap-index.xml` responderam com HTTP 200.
- CSS da página institucional respondeu com `Content-Type: text/css` e HTTP 200 via HTTPS.
