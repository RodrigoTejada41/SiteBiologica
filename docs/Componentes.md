# Componentes

## `BaseLayout`

Estrutura HTML global, metadados, JSON-LD da organização, header, footer e revelação progressiva.

## `Header`

Navegação principal, estado ativo, menu móvel, botão da área do cliente e CTA de orçamento.

## `Footer`

Endereço, mapa, e-mail, navegação secundária com acesso à área do cliente e barra de contato móvel. Telefones não são exibidos globalmente.

## Página de contato

Único local com os números do WhatsApp administrativo e financeiro. O formulário envia solicitações de orçamento ao atendimento administrativo.

## `ServiceCard`

Imagem, nome, resumo e link para uma página de serviço.

## `ClientGrid`

Grade de logotipos disponíveis no acervo. Uso público depende de autorização.

## `CtaPanel`

Conversão final reutilizada nas páginas institucionais e de serviço.

## `ServiceInformation`

Conteúdo aprofundado e tipado de cada serviço: sinais, abordagem, preparação, cuidados posteriores e perguntas frequentes. Deve renderizar dados, não conter regras específicas de um serviço.

## Regras

- Props tipadas.
- Um componente deve ter uma responsabilidade clara.
- Não criar abstração para uso único sem ganho de legibilidade ou teste.
- Reutilizar tokens e classes globais antes de criar variações locais.
- Interações devem funcionar com teclado e respeitar movimento reduzido.
