# UI e UX

## Regras de marca

- Preservar a logomarca sem redesenho, deformação ou recoloração.
- Preservar os verdes institucionais definidos nos tokens CSS.
- Manter Manrope como tipografia principal.
- Não inserir texto ou logomarca dentro de fotografias.

## Tese visual

Marca técnica, cuidadosa e confiável, apresentada com fotografia limpa, verde institucional dominante, superfícies claras e ritmo editorial.

## Plano de conteúdo

1. Hero: necessidade, orientação e CTA.
2. Suporte: serviços e perfis atendidos.
3. Detalhe: processo e padrão de atendimento.
4. Prova: clientes, credenciais e casos verificáveis.
5. Conversão: FAQ, contato e CTA final.

## Tese de interação

- Entrada do hero curta e sem esconder o conteúdo essencial.
- Revelação suave de seções conforme a rolagem.
- Estados de hover, foco e menu com transições entre 120 e 240 ms.
- Respeito obrigatório a `prefers-reduced-motion`.

## Critérios responsivos

- Larguras mínimas de teste: 390, 768, 1024, 1440 e 1920 px.
- Nenhum texto importante dentro de imagens.
- Alvos de toque com área adequada e foco nunca encoberto.
- Header e hero devem caber no primeiro viewport sem cortar ações essenciais.

## Formulários

- Nunca confirmar uma ação externa sem verificar se ela foi iniciada.
- Erros devem ser apresentados pelo navegador ou em região `aria-live`.
- Instruções de formato devem estar associadas por `aria-describedby`.
- Sempre oferecer recuperação quando uma nova guia puder ser bloqueada.

## Pendências

- Acrescentar prova real sem inventar dados.
- Substituir a fotografia gerada por fotografia real da equipe apenas se houver arquivo autorizado e tecnicamente adequado.

## Ativos visuais concluídos em 2026-07-16

- `site-v2/src/assets/hero-v2.jpg`: fotografia sem texto, logotipo ou informação essencial embutida.
- `site-v2/public/images/og-v2.jpg`: arte social 1200×630, 86 KiB, usando a logomarca original sem alteração.
- Hero móvel full-bleed validado em 390×844 e 768×1024; header, mensagem, CTAs e horário cabem no primeiro viewport.

Geração: ferramenta integrada de imagem, caso de uso `photorealistic-natural`.

Prompt final: fotografia editorial realista de um técnico treinado inspecionando cuidadosamente um ambiente comercial moderno e limpo; técnico e ação no centro-direita; área negativa à esquerda; luz natural; paleta neutra com verdes discretos; sem texto, logotipos, pragas visíveis, produtos químicos, marcas, watermark ou composição em colagem.

## Refinamentos concluídos em 2026-07-17

- Cards de serviços com altura uniforme, padding responsivo, hierarquia tipográfica e descrições de leitura rápida.
- Hover de 250 ms com elevação discreta, sombra suave, mudança de cor do CTA e zoom leve da imagem.
- Foco visível, rótulos acessíveis e textos alternativos preservados.
- Selo Prêmio Quality Brasil adicionado sobre a fotografia do hero, sem substituí-la, e repetido no rodapé.
- Versão aprimorada do selo em `src/assets/brand/selo-premio-quality-brasil.png` e original preservado em `src/assets/brand/selo-premio-quality-brasil-original.png`.
- Composição validada em desktop e mobile, com escala e posição específicas por viewport.
