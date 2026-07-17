# Testes

## Automáticos

```sh
cd site-v2
npm test
npm audit
```

`npm test` gera o site e valida:

- presença das 14 páginas esperadas;
- idioma, H1, description e canonical;
- resolução de links internos;
- `rel="noopener noreferrer"` em novas guias;
- JSON-LD válido;
- manifesto com ícone;
- formulário com fallback e validação de telefone;
- cobertura dos scripts inline pelos hashes da CSP.

## Navegador

Playwright é usado manualmente para menu, teclado, formulário, pop-up bloqueado e viewports 390, 768 e 1440 px.

## Performance

Executar Lighthouse móvel e desktop sem extensões antes da publicação. O antivírus Kaspersky injeta um script no navegador local e pode reduzir “Boas práticas” sem relação com o projeto.

Resultado final local: móvel 93 em performance, 100 em acessibilidade e SEO; desktop 100 nas três categorias.
