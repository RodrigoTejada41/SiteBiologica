# Documentação do projeto

Fonte oficial para arquitetura, decisões, execução e manutenção do site Evolução Biológica.

## Estado atual

- Site legado preservado em `http://localhost:8082/`.
- Site V2 em Astro disponível em `http://localhost:8083/`.
- Identidade obrigatoriamente preservada: logomarca e cores institucionais.
- Modernização local, revisão editorial, catálogo de serviços e selo institucional concluídos.
- Área do cliente disponível como página informativa em `/area-do-cliente/`, aguardando integração com o CRM.
- Telefones fixos removidos; WhatsApps administrativo e financeiro disponíveis somente em `/contato/`.
- Formulário de orçamento alinhado e validado em desktop e celular.
- Container V2 atualizado e saudável; produção externa não foi alterada.
- Página institucional “Quem somos”, missão, visão e valores concluída.
- Demo externa ativa em `https://172-238-213-72.sslip.io/`, com HTTPS válido e renovação automática.
- Domínio e DNS oficiais não foram alterados; publicação final continua pendente de autorização.

## Índice

- [Auditoria 2026](./AUDITORIA_SITE_2026.md)
- [Arquitetura](./Arquitetura.md)
- [Decisões técnicas](./Decisoes.md)
- [Roadmap](./Roadmap.md)
- [Mudanças](./Mudancas.md)
- [UI e UX](./UI-UX.md)
- [SEO](./SEO.md)
- [Performance](./Performance.md)
- [Segurança](./Seguranca.md)
- [Componentes](./Componentes.md)
- [Padrão de código](./PadraoCodigo.md)
- [API](./API.md)
- [Deploy](./Deploy.md)
- [Demonstração na VPS](./DEMO_VPS.md)
- [Estado atual do projeto](./ESTADO_ATUAL_PROJETO.md)
- [Checklist](./Checklist.md)
- [Testes](./Testes.md)
- [Histórico](./Historico.md)
- [Modernização anterior](./MODERNIZACAO.md)
- [Publicação anterior](./PUBLICACAO.md)

## Regra de atualização

Toda alteração funcional deve atualizar `Mudancas.md`, o documento da área afetada e `Historico.md`. Decisões arquiteturais devem ser registradas em `Decisoes.md` antes da implementação.
