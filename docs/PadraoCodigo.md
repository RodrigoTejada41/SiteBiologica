# Padrão de código

## Princípios

- KISS e YAGNI: implementar somente o necessário.
- DRY: centralizar dados e comportamento repetido.
- Responsabilidade única para componentes e utilitários.
- TypeScript estrito e tipos explícitos para dados do domínio.
- HTML semântico antes de ARIA.
- CSS baseado em tokens e mobile-first quando aplicável.

## Nomenclatura

- Componentes: `PascalCase.astro`.
- Variáveis, funções e campos: `camelCase`.
- Classes CSS: nomes semânticos em kebab-case.
- Documentos: nomes definidos no índice de `docs`.

## Qualidade obrigatória

Antes de cada commit funcional:

1. `npm run build`.
2. `npm audit`.
3. Teste da rota alterada em desktop e mobile.
4. Verificação de teclado quando houver interação.
5. Atualização de documentação e histórico.

## Commits

Usar `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `perf:`, `test:`, `build:` ou `chore:`. Um commit não deve misturar responsabilidades sem necessidade.
