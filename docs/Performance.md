# Performance

## Baseline local de 2026-07-16

| Métrica | Celular | Desktop |
|---|---:|---:|
| Lighthouse Performance | 94 | 100 |
| FCP | 2,2 s | 0,6 s |
| LCP | 2,7 s | 0,7 s |
| TBT | 30 ms | 0 ms |
| CLS | 0 | 0,003 |

## Orçamento

- LCP de laboratório: até 2,5 s.
- CLS: até 0,1.
- JavaScript próprio: manter mínimo e sem bibliotecas de animação desnecessárias.
- Imagens: responsivas, dimensionadas e comprimidas.
- Fontes: hospedadas localmente, com conjunto mínimo necessário.

## Estratégias

- `astro:assets` para WebP/AVIF e `srcset`.
- Hero com prioridade alta; imagens abaixo da dobra com lazy loading.
- Cache imutável para `_assets`.
- CSS e JavaScript minificados pelo build.
- Nova medição sem extensões após cada fase visual.
