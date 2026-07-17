# Decisões técnicas

## ADR-001 — Site estático com Astro

- **Status:** aceito.
- **Motivo:** conteúdo institucional, baixo volume de JavaScript e necessidade de velocidade.
- **Consequência:** menor superfície de ataque e manutenção simples; recursos dinâmicos dependem de serviço externo ou backend futuro.

## ADR-002 — Identidade visual imutável

- **Status:** obrigatório.
- **Decisão:** preservar logomarca, verdes institucionais e essência da marca. Modernizar composição, hierarquia, tipografia, fotografia e interação.

## ADR-003 — WhatsApp sem armazenamento local

- **Status:** aceito com correção pendente.
- **Motivo:** reduzir coleta de dados e evitar backend prematuro.
- **Risco:** perda de lead se a nova guia for bloqueada ou abandonada.
- **Tratamento:** criar fallback explícito e medir o funil antes de considerar backend.

## ADR-004 — Provas somente verificadas

- **Status:** obrigatório.
- **Decisão:** não inventar depoimentos, resultados, licenças, garantias ou estatísticas. Logotipos precisam de autorização e contexto.

## ADR-005 — Segurança no ponto correto

- **Status:** aceito.
- **Decisão:** CSP será endurecida no Nginx; HSTS só será ativado no terminador HTTPS depois da validação dos subdomínios.

## ADR-006 — Evolução incremental

- **Status:** aceito.
- **Decisão:** realizar commits pequenos por responsabilidade, com documentação, build e teste antes de avançar.
