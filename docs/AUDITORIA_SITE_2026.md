# Auditoria completa do site V2 — 2026

Data: 16/07/2026  
Ambiente auditado: `http://localhost:8083/`  
Escopo: homepage, serviços, páginas de serviço, clientes, contato, política, 404, responsividade, teclado, SEO técnico, performance, dependências e configuração Nginx.

## Resumo executivo

O site já possui uma base moderna e enxuta: Astro estático, HTML semântico, navegação responsiva, tipografia Manrope, imagens otimizadas em WebP, baixo uso de JavaScript, sitemap, dados estruturados e cabeçalhos de segurança.

Os principais obstáculos para uma aparência premium e maior conversão não são o framework nem o layout-base. São:

1. A imagem do hero contém texto e logomarca antigos embutidos e fica cortada no tablet.
2. A prova de confiança ainda é fraca: há logotipos, mas faltam contexto, autorização, depoimentos verificáveis, credenciais e resultados reais.
3. As oito páginas de serviço têm conteúdo muito curto e semelhante.
4. O formulário depende da abertura de uma nova guia do WhatsApp e não trata bloqueio de pop-up.
5. HTTPS e comportamento real em produção ainda não foram validados.

## Medições

| Métrica | Celular | Desktop | Avaliação |
|---|---:|---:|---|
| Lighthouse Performance | 94 | 100 | Forte |
| Lighthouse Accessibility | 100 | 100 | Forte |
| Lighthouse SEO técnico | 100 | 100 | Forte |
| FCP | 2,2 s | 0,6 s | Bom |
| LCP | 2,7 s | 0,7 s | Celular ligeiramente acima da meta de 2,5 s |
| TBT | 30 ms | 0 ms | Excelente |
| CLS | 0 | 0,003 | Excelente |
| Peso transferido no teste | 328 KiB | 341 KiB | Baixo |

O Lighthouse registrou 81 em “Boas práticas”, mas a perda foi causada pelo JavaScript e WebSocket injetados pelo antivírus Kaspersky no navegador de teste. Não é código do site. A CSP do próprio site bloqueou parte dessa injeção.

Os limites de referência para uma boa experiência são LCP até 2,5 s, INP até 200 ms e CLS até 0,1 no percentil 75. Fonte: [web.dev — Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds).

## Notas atuais

| Área | Nota | Motivo principal |
|---|---:|---|
| Design | 78/100 | Boa base visual, prejudicada pelo banner antigo embutido no hero e por imagens pouco consistentes |
| UX | 88/100 | Navegação e hierarquia claras; contato ainda depende de pop-up |
| Performance | 94/100 | Site leve; LCP móvel medido em 2,7 s |
| SEO | 86/100 | Técnica excelente; conteúdo dos serviços e sinais locais ainda superficiais |
| Segurança | 84/100 | Sem dependências vulneráveis; CSP e HSTS precisam de ajuste antes da produção |
| Acessibilidade | 96/100 | Lighthouse 100, teclado e redução de movimento funcionam; faltam pequenos reforços no formulário |
| Responsividade | 84/100 | Menu móvel funciona bem; hero apresenta arte cortada no tablet |
| Conversão | 72/100 | CTAs claros, mas prova social, mensuração e recuperação do contato são insuficientes |

Notas de segurança e SEO são provisórias até o teste no domínio final com HTTPS, DNS, indexação e cabeçalhos do proxy de produção.

## Problemas e soluções priorizados

### Alta — corrigir antes da publicação

#### A1. Hero usa um banner antigo como fotografia

- **Problema:** `src/assets/hero.jpg` contém texto promocional e uma segunda logomarca dentro da própria imagem. Em 768 px, esse conteúdo aparece cortado ao lado do novo título.
- **Impacto:** quebra a consistência visual, duplica a marca, reduz legibilidade e transmite aspecto de adaptação antiga.
- **Solução:** substituir somente o arquivo por uma fotografia limpa, sem texto nem logotipo, mantendo as cores institucionais, o componente Astro e o enquadramento responsivo. Produzir uma imagem real de equipe/equipamento ou uma foto licenciada com espaço negativo à esquerda.
- **Critério:** validar em 390, 768, 1024, 1440 e 1920 px; nenhuma informação essencial pode existir dentro da foto.
- **Evidência:** `output/auditoria-v2/playwright/.playwright-cli/page-2026-07-17T01-10-35-068Z.png`.

#### A2. Prova de confiança insuficiente

- **Problema:** a seção de clientes exibe marcas, mas não explica serviço realizado, período, resultado ou autorização. Não há depoimentos, credenciais verificadas, responsável técnico, garantias documentadas ou estudos de caso.
- **Impacto:** usuários não conseguem distinguir prova real de uma grade decorativa. Isso reduz confiança e conversão, principalmente em serviços técnicos realizados dentro do imóvel.
- **Solução:** publicar apenas evidências reais e autorizadas:
  - 2 ou 3 depoimentos com nome, cargo/empresa e autorização;
  - credenciais, licenças e certificados aplicáveis com número ou link verificável;
  - um estudo de caso curto com problema, solução e resultado comprovável;
  - logotipos acompanhados de contexto, sem sugerir relação atual quando isso não for confirmado.
- **Dependência:** o proprietário precisa fornecer provas, datas e permissões. Não usar estatísticas ou certificações inventadas.

#### A3. Páginas de serviço têm conteúdo superficial

- **Problema:** todas usam o mesmo template e apenas um parágrafo específico, uma lista “indicado para” e serviços relacionados.
- **Impacto:** responde poucas dúvidas, enfraquece intenção de busca local e dificulta a decisão do visitante. Lighthouse 100 confirma a implementação técnica, não a qualidade ou competitividade do conteúdo.
- **Solução:** ampliar cada página com conteúdo único e revisado tecnicamente:
  1. sinais do problema;
  2. como é feita a avaliação;
  3. etapas do atendimento;
  4. preparação do ambiente;
  5. cuidados após o serviço;
  6. perguntas frequentes específicas;
  7. evidência real e CTA contextual.
- **Implementação recomendada:** ampliar o tipo `Service` com campos estruturados em vez de inserir HTML solto.

```ts
type Service = {
  // campos atuais
  signs: string[];
  steps: Array<{ title: string; text: string }>;
  preparation: string[];
  aftercare: string[];
  faqs: Array<{ question: string; answer: string }>;
};
```

O conteúdo deve ajudar pessoas, sem repetição artificial de palavras-chave. Fonte: [Google — Guia de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-BR).

#### A4. Produção e HTTPS ainda não foram validados

- **Problema:** a auditoria ocorreu em HTTP local. Certificado, redirecionamento HTTP→HTTPS, cadeia TLS, DNS, canonical real e indexação não puderam ser confirmados.
- **Impacto:** é um bloqueio de publicação, não uma falha comprovada do código local.
- **Solução:** após subir no domínio, testar HTTPS, redirecionamentos, `robots.txt`, sitemap, canonicals, Schema, Search Console, compartilhamento social e todas as rotas antigas.

### Média — maior retorno após os bloqueadores

#### M1. Contato informa sucesso mesmo se o WhatsApp for bloqueado

- **Problema:** `window.open()` não tem retorno verificado. Se o navegador bloquear a nova guia, a mensagem ainda diz que o WhatsApp será aberto.
- **Impacto:** falsa confirmação e perda de lead.
- **Solução:** oferecer um link de recuperação sem usar HTML dinâmico.

```astro
<a data-wa-fallback class="button button-link" hidden
   target="_blank" rel="noopener noreferrer">Abrir WhatsApp</a>
```

```ts
const popup = window.open(url, '_blank', 'noopener,noreferrer');
const fallback = document.querySelector<HTMLAnchorElement>('[data-wa-fallback]');

if (!popup && fallback) {
  fallback.href = url;
  fallback.hidden = false;
  feedback!.textContent = 'A nova guia foi bloqueada. Use o link abaixo.';
}
```

#### M2. Telefone aceita qualquer texto

- **Problema:** `type="tel"` e `required` não verificam tamanho ou caracteres.
- **Impacto:** mensagem de contato pode conter telefone inutilizável.
- **Solução:** validação permissiva, instrução acessível e validação equivalente se futuramente houver backend.

```astro
<label for="phone">Telefone</label>
<input id="phone" name="phone" type="tel" autocomplete="tel"
  inputmode="tel" minlength="10" maxlength="20"
  pattern="[0-9() +.-]{10,20}" aria-describedby="phone-hint" required />
<small id="phone-hint">Inclua DDD. Exemplo: (11) 99999-9999.</small>
```

#### M3. Não há mensuração de conversão

- **Problema:** não existem eventos para CTA, início do formulário, conclusão e abertura do WhatsApp.
- **Impacto:** mudanças de CRO não podem ser comparadas por dados reais.
- **Solução:** adicionar mensuração compatível com a política de privacidade e consentimento aplicável. Eventos mínimos: `cta_whatsapp_click`, `form_start`, `form_valid_submit`, `whatsapp_opened`. Não carregar scripts pesados antes do consentimento quando ele for necessário.

#### M4. LCP móvel medido em 2,7 s

- **Problema:** o LCP ficou 0,2 s acima da referência “boa”.
- **Impacto:** pequeno, mas importante em redes móveis reais.
- **Solução:** primeiro substituir e recomprimir o hero; manter `loading="eager"` e `fetchpriority="high"`; evitar texto embutido; testar WebP/AVIF em 720, 960 e 1440; repetir Lighthouse sem extensões e medir dados de campo após publicação.

#### M5. Imagem social está desatualizada e pesada

- **Problema:** `public/images/og.jpg` tem 415 KiB, formato panorâmico baixo e arte antiga. Não corresponde ao formato de compartilhamento amplo.
- **Impacto:** prévias sociais cortadas, visual inconsistente e menor credibilidade.
- **Solução:** criar arte dedicada de 1200×630 px, idealmente abaixo de 200 KiB, com a logomarca preservada, uma foto limpa, título curto e área segura. Adicionar `og:image:width`, `og:image:height`, `twitter:title`, `twitter:description` e `twitter:image`.

#### M6. CSP permite scripts inline

- **Problema:** `script-src 'self' 'unsafe-inline'` reduz a proteção contra XSS.
- **Impacto:** a superfície atual é baixa — site estático, sem `innerHTML`, `eval` ou dependências vulneráveis — mas a política fica menos resistente a futuras mudanças.
- **Solução:** externalizar scripts executáveis ou gerar hashes/nonces no ponto de publicação; depois usar `script-src 'self'`. Manter JSON-LD somente com dados locais serializados por `JSON.stringify`.

#### M7. HSTS com `includeSubDomains` está habilitado sem validação do domínio

- **Problema:** o Nginx HTTP local envia `Strict-Transport-Security: max-age=31536000; includeSubDomains`.
- **Impacto:** navegadores ignoram HSTS em HTTP local, mas em produção uma configuração prematura pode tornar subdomínios sem HTTPS inacessíveis.
- **Solução:** configurar HSTS no terminador TLS somente após confirmar HTTPS em todos os subdomínios. Começar com `max-age` menor, monitorar e só então aumentar e avaliar `includeSubDomains`. Referência: [OWASP Secure Headers](https://owasp.org/www-project-secure-headers/).

#### M8. SEO local pode ser reforçado

- **Problema:** endereço e horário estão presentes, mas falta um link explícito “Como chegar”, perfil empresarial verificado e sinais externos consistentes.
- **Impacto:** menor facilidade de contato local e menor consistência de entidade.
- **Solução:** adicionar link de mapa usando o endereço confirmado; conectar `sameAs` somente a perfis oficiais; manter nome, endereço e telefones idênticos no site e nos cadastros locais; configurar Search Console e perfil empresarial após publicação.

#### M9. Hero comunica categoria, mas pouco diferencial

- **Problema:** “Agilidade e precisão” é genérico e não apresenta prova ou situação concreta.
- **Impacto:** em cinco segundos o visitante entende o setor, mas não por que deve escolher a empresa.
- **Solução:** usar uma proposta baseada em necessidade real, sem promessa não comprovada. Exemplo: “Pragas no seu imóvel? Receba orientação para identificar o serviço adequado.” Abaixo, perfil atendido, região e horário já confirmados.

#### M10. Galeria visual não demonstra operação real

- **Problema:** imagens ilustram pragas e aplicação, mas não mostram claramente equipe, equipamentos, processo ou padrão de atendimento.
- **Impacto:** limita a percepção premium e a confiança.
- **Solução:** sessão fotográfica real, com autorização, iluminação consistente, uniformes/equipamentos e enquadramentos horizontais e verticais. Imagens não devem conter textos embutidos.

### Baixa — acabamento

#### B1. Manifesto sem ícones

- **Problema:** `manifest.webmanifest` contém `"icons": []`.
- **Solução:** gerar ícones próprios de 192×192 e 512×512 a partir de símbolo aprovado da marca. Não redesenhar a logomarca.

#### B2. Metadados do Twitter dependem de fallback

- **Problema:** existe `twitter:card`, mas título, descrição e imagem não são explícitos.
- **Solução:** preencher as quatro tags a partir dos mesmos dados de Open Graph.

#### B3. Endereço poderia ser mais acionável

- **Problema:** o rodapé mostra o endereço como texto.
- **Solução:** manter o texto e adicionar “Como chegar” com destino de mapa, sem transformar toda a linha em link.

## Auditoria por seção

| Seção | Estado atual | Melhoria recomendada |
|---|---|---|
| Cabeçalho/menu | Claro, sem excesso, menu móvel funcional e estado acessível | Manter; acrescentar indicador de contato apenas se não competir com o CTA |
| Hero | Hierarquia e CTA fortes; imagem antiga compromete o conjunto | Foto limpa, proposta mais concreta e uma prova verificada próxima ao CTA |
| Faixa de confiança | Explica perfis atendidos | Trocar numeração decorativa por três benefícios verificáveis ou credenciais reais |
| Serviços | Cards consistentes e fáceis de escanear | Conteúdo específico por serviço e CTAs relacionados à intenção da página |
| Sobre | Boa composição e texto objetivo | Acrescentar equipe/processo real e credencial verificável, se fornecida |
| Processo | Fluxo simples em três etapas | Informar prazo de resposta somente se houver SLA real |
| Clientes | Boa grade visual | Contexto, autorização e estudo de caso; evitar logos meramente decorativos |
| FAQ | `details/summary` nativo, acessível e leve | FAQ específico em cada serviço com respostas técnicas revisadas |
| CTA final | Direto e consistente | Reforçar confiança imediatamente antes do CTA |
| Contato | Labels, autocomplete, consentimento e validação nativa | Fallback do pop-up, validação de telefone e eventos de conversão |
| Rodapé | Informações completas | Link de mapa e perfis oficiais confirmados |

## Acessibilidade

Pontos validados:

- idioma `pt-BR`;
- link “Pular para o conteúdo” é o primeiro foco e funciona;
- navegação por teclado funcional;
- um único H1 por página e hierarquia coerente;
- labels associados aos campos;
- mensagem com `aria-live`;
- menu móvel atualiza `aria-expanded` e o rótulo;
- foco visível;
- contraste aprovado pelo Lighthouse;
- suporte a `prefers-reduced-motion`;
- imagens informativas com texto alternativo e decorativas com `alt=""`.

A referência vigente é WCAG 2.2; ela acrescenta critérios como foco não encoberto, tamanho mínimo de alvos, ajuda consistente e entrada redundante. Fonte: [W3C — WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/).

## Segurança e backend

- `npm audit`: 0 vulnerabilidades conhecidas.
- Não foram encontrados `eval`, `innerHTML`, `document.write`, armazenamento local sensível ou URLs de usuário executadas.
- Links externos em nova guia usam `noopener noreferrer`.
- Formulário codifica o texto com `encodeURIComponent`.
- Não existe backend nem banco no V2. Isso reduz a superfície de ataque, mas o site não registra leads se o visitante abandonar o WhatsApp.
- Se futuramente houver captura de lead no servidor: validar esquema no backend, limitar taxa, proteger contra spam, minimizar dados, registrar consentimento, definir retenção e nunca expor segredos no JavaScript do navegador.
- HTTPS deve ser validado no domínio real. Não é correto classificar `localhost` HTTP como falha de produção.

## Componentes modernos recomendados

Sem alterar cores, logomarca ou essência:

1. Hero editorial com fotografia limpa e composição assimétrica.
2. Faixa de credenciais verificadas com links ou números de registro.
3. Estudo de caso em card amplo: problema, intervenção e resultado comprovado.
4. Depoimentos curtos com identidade e autorização.
5. Cards de serviço com “sinais comuns” e CTA contextual.
6. CTA móvel persistente já existente, mantendo distância do foco e conteúdo.
7. FAQ contextual por serviço.
8. Link “Como chegar” e bloco local compacto.

Evitar carrosséis automáticos, vídeo de fundo, excesso de vidro/desfoque, parallax e animações longas. Aparência premium vem de fotografia, tipografia, ritmo, conteúdo e prova, não de efeitos.

## Microinterações

- entrada de seção: 180–240 ms, deslocamento máximo de 12–16 px;
- hover de botões/cards: 120–160 ms;
- abertura de FAQ: até 180 ms, sem prender conteúdo atrás de JavaScript;
- feedback imediato de validação e envio;
- manter `prefers-reduced-motion`, já implementado;
- não animar LCP nem esconder conteúdo essencial antes do JavaScript.

## Wireframe textual recomendado

1. Cabeçalho: logo, Serviços, Clientes, Sobre, Contato, CTA.
2. Hero: problema concreto, proposta, CTA principal, CTA secundário, foto real limpa.
3. Prova imediata: credenciais verificadas ou três fatos confirmados.
4. Serviços prioritários: cards com sinais, ambiente e CTA.
5. Como funciona: contato, avaliação, execução.
6. Estudo de caso real.
7. Clientes/depoimentos autorizados.
8. Sobre/equipe e padrão de atendimento.
9. FAQ.
10. CTA final.
11. Rodapé com endereço, mapa, horário, telefones, e-mail e política.

## Plano de ação

| Ordem | Prazo estimado | Entrega | Impacto |
|---:|---:|---|---|
| 1 | 1–2 dias | Nova foto do hero, nova imagem social, ajuste da mensagem principal | Alto e imediato no design |
| 2 | 1 dia | Fallback do WhatsApp, telefone, link de mapa, metatags sociais e ícones | Alto na conversão; baixo esforço |
| 3 | 3–5 dias | Conteúdo único das oito páginas de serviço e FAQs técnicas | Alto em SEO, confiança e conversão |
| 4 | 2–4 dias, depende do cliente | Credenciais, depoimentos, autorizações e estudo de caso | Maior ganho de confiança |
| 5 | 1–2 dias | Mensuração de funil e painel mínimo | Permite otimização baseada em dados |
| 6 | 1–2 dias | CSP estrita, estratégia HSTS e validação de HTTPS no domínio | Segurança de produção |
| 7 | 1 dia | Lighthouse sem extensões, teste de rotas, teclado e celulares reais | Liberação final |

Prazo técnico estimado: 10–17 dias úteis. Conteúdo, fotos, credenciais e autorizações podem alterar o cronograma.

## Critérios de aceite para publicação

- hero sem texto/logomarca embutidos em todas as larguras;
- LCP móvel de laboratório até 2,5 s ou justificativa medida;
- nenhuma rota interna quebrada;
- contato funciona com e sem permissão de pop-up;
- HTTPS e redirecionamentos válidos;
- CSP sem `unsafe-inline` para scripts executáveis, quando viável no pipeline;
- HSTS ativado apenas no TLS e com subdomínios verificados;
- dados estruturados e metadados sem informação inventada;
- Search Console e sitemap configurados;
- eventos essenciais de conversão testados;
- conteúdo e prova social aprovados pelo responsável da empresa.
