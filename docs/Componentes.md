# Componentes

## `BaseLayout`

Estrutura HTML global, metadados, JSON-LD da organização, header, footer e revelação progressiva.

## `Header`

Navegação principal, estado ativo, menu móvel e CTA de orçamento.

## `Footer`

Dados de contato, navegação secundária e barra de contato móvel.

## `ServiceCard`

Imagem, nome, resumo e link para uma página de serviço.

## `ClientGrid`

Grade de logotipos disponíveis no acervo. Uso público depende de autorização.

## `CtaPanel`

Conversão final reutilizada nas páginas institucionais e de serviço.

## Regras

- Props tipadas.
- Um componente deve ter uma responsabilidade clara.
- Não criar abstração para uso único sem ganho de legibilidade ou teste.
- Reutilizar tokens e classes globais antes de criar variações locais.
- Interações devem funcionar com teclado e respeitar movimento reduzido.
