# Decisões técnicas

## ADR-001 — Site estático com Astro

- **Status:** aceito.
- **Motivo:** conteúdo institucional, baixo volume de JavaScript e necessidade de velocidade.
- **Consequência:** menor superfície de ataque e manutenção simples; recursos dinâmicos dependem de serviço externo ou backend futuro.

## ADR-002 — Identidade visual imutável

- **Status:** obrigatório.
- **Decisão:** preservar logomarca, verdes institucionais e essência da marca. Modernizar composição, hierarquia, tipografia, fotografia e interação.

## ADR-003 — WhatsApp sem armazenamento local

- **Status:** aceito e implementado.
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

## ADR-007 — Fotografia gerada sem interferência na marca

- **Status:** aceito.
- **Decisão:** usar fotografia gerada sem texto, logotipo, uniforme identificável, produtos químicos ou alegações visuais específicas.
- **Motivo:** eliminar a arte antiga embutida sem inventar credenciais ou alterar a identidade institucional.
- **Consequência:** o ativo pode permanecer em produção; uma fotografia real autorizada pode substituí-lo posteriormente mantendo o mesmo enquadramento.

## ADR-008 — Infraestrutura somente na fase final

- **Status:** aceito.
- **Decisão:** DNS, certificado, redirecionamento HTTPS, canonical de produção e HSTS serão configurados somente após o aceite final do site.
- **Consequência:** o ambiente local continua em HTTP; isso não deve ser tratado como falha do código da aplicação.

## ADR-009 — Host HTTPS temporário para demonstração

- **Status:** aceito e implementado em 2026-07-20.
- **Decisão:** publicar a versão aprovada em uma VPS isolada usando `sslip.io` e Caddy somente para demonstração ao cliente.
- **Motivo:** disponibilizar HTTPS válido sem alterar antecipadamente o DNS oficial.
- **Consequência:** a URL temporária depende do DNS externo `sslip.io` e não deve ser tratada como produção.
- **Limite:** domínio oficial, DNS, HSTS e Search Console permanecem pendentes de autorização específica.
