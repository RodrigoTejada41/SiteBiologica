# Performance

## Medição final local de 2026-07-16

| Métrica | Celular | Desktop |
|---|---:|---:|
| Lighthouse Performance | 93 | 100 |
| FCP | 2,1 s | 0,6 s |
| LCP | 2,9 s | 0,6 s |
| TBT | 0 ms | 0 ms |
| CLS | 0 | 0,003 |
| Transferência | 353 KiB | 353 KiB |

## Orçamento

- LCP de laboratório: até 2,5 s.
- CLS: até 0,1.
- JavaScript próprio: manter mínimo e sem bibliotecas de animação desnecessárias.
- Imagens: responsivas, dimensionadas e comprimidas.
- Fontes: hospedadas localmente, com conjunto mínimo necessário.

## Estratégias

- `astro:assets` para WebP/AVIF e `srcset`.
- Hero com prioridade alta; imagens abaixo da dobra com lazy loading.
- Hero convertido pelo Astro em variantes WebP de 18 a 70 KiB.
- Cache imutável para `_assets`.
- CSS e JavaScript minificados pelo build.
- Nova medição sem extensões após cada fase visual.

O navegador local continua recebendo um script injetado pelo Kaspersky. Ele é bloqueado pela CSP e reduz “Boas práticas” para 81, mas não pertence ao projeto.

Relatórios: `output/auditoria-v2/lighthouse-hero-final-mobile.json` e `lighthouse-hero-final-desktop.json`.
