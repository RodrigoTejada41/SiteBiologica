import type { ImageMetadata } from 'astro';

import dedetizacao from '../assets/services/img_dedetizacao.jpg';
import desinsetizacao from '../assets/services/img_desinsetizacao.jpg';
import desratizacao from '../assets/services/img_desratizacao.jpg';
import descupinizacao from '../assets/services/img_descupinizacao.jpg';
import pombos from '../assets/services/img_controle_pombos.jpg';
import controleIntegrado from '../assets/services/img_controle_pragas.jpg';
import higienizacao from '../assets/services/img_higienizacao.jpg';
import sanitizacao from '../assets/services/img_sanitizacao.jpg';

import amazo from '../assets/clients/img_amazo.png';
import avagro from '../assets/clients/img_avagro.png';
import bgFood from '../assets/clients/img_bg_food.png';
import bgfAlimentos from '../assets/clients/img_bgf_alimentos.png';
import bomGosto from '../assets/clients/img_bom_gosto.png';
import ceagesp from '../assets/clients/img_ceagesp.png';
import deMarchi from '../assets/clients/img_de_marchi.png';
import feijaoDeCorda from '../assets/clients/img_feijao_de_corda.png';
import kfDistribuidora from '../assets/clients/img_kf_distribuidora.png';
import pegPese from '../assets/clients/img_peg_pese.png';
import perdizes from '../assets/clients/img_perdizes.png';
import rizzoGourmet from '../assets/clients/img_rizzo_gourmet.png';
import sabesp from '../assets/clients/img_sabesp.png';
import sacolaoHigienopolis from '../assets/clients/img_sacolao_higienopolis.png';
import sacolaoLapa from '../assets/clients/img_sacolao_lapa.png';

export const company = {
  name: 'Evolução Biológica',
  legalLabel: 'Evolução Biológica Controle de Pragas',
  email: 'contato@evolucaobiologica.com',
  contacts: {
    administration: {
      label: 'Administrativo e WhatsApp',
      display: '(11) 96586-2473',
      number: '5511965862473',
    },
    financial: {
      label: 'Financeiro e WhatsApp',
      display: '(11) 99329-2873',
      number: '5511993292873',
    },
  },
  hours: 'Segunda a sexta-feira: das 8:30 às 18h.',
  address: {
    street: 'Avenida Fernando Amaro Miranda, 374',
    postalCode: '04821-100',
    city: 'São Paulo',
    region: 'SP',
    country: 'BR',
  },
  region: 'São Paulo',
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  idealFor: string[];
  details: {
    signs: string[];
    approach: string[];
    preparation: string[];
    aftercare: string[];
    faqs: Array<{ question: string; answer: string }>;
  };
};

export const services: Service[] = [
  {
    slug: 'dedetizacao',
    name: 'Controle de pragas urbanas',
    short: 'Combata baratas, aranhas e escorpiões com desinfestação técnica e direcionada.',
    description: 'Conhecido popularmente como dedetização, o serviço começa pela inspeção do ambiente e dos pontos de atividade. O método de desinfestação é definido conforme a praga, a estrutura e as orientações de segurança.',
    image: dedetizacao,
    imageAlt: 'Baratas em foco de infestação para controle de pragas urbanas',
    idealFor: ['Residências', 'Comércios', 'Condomínios', 'Empresas'],
    details: {
      signs: [
        'Aparecimento recorrente de pragas em diferentes períodos do dia.',
        'Atividade próxima a frestas, ralos, áreas de alimento ou pontos de umidade.',
        'Ocorrências que retornam mesmo após ações de limpeza e organização.',
      ],
      approach: [
        'Entendimento do ambiente, da rotina e dos sinais observados.',
        'Avaliação dos pontos de acesso, abrigo e atividade.',
        'Definição do atendimento e das orientações compatíveis com o cenário.',
      ],
      preparation: [
        'Liberar o acesso às áreas indicadas durante a orientação inicial.',
        'Informar a presença de crianças, animais e pessoas com necessidades específicas.',
      ],
      aftercare: [
        'Respeitar o período de retorno e as instruções informadas para o método utilizado.',
        'Manter as medidas de organização, vedação e monitoramento recomendadas.',
      ],
      faqs: [
        {
          question: 'É necessário sair do imóvel durante o atendimento?',
          answer: 'Depende do método, do produto e do ambiente. A orientação de preparação e retorno deve ser confirmada antes da execução.',
        },
        {
          question: 'Uma única aplicação resolve qualquer ocorrência?',
          answer: 'A necessidade de acompanhamento varia conforme a praga, a intensidade, os acessos e as condições do imóvel. A avaliação orienta o plano adequado.',
        },
      ],
    },
  },
  {
    slug: 'desinsetizacao',
    name: 'Controle de insetos',
    short: 'Combata insetos rasteiros e voadores com desinsetização técnica e direcionada.',
    description: 'O controle de insetos, também chamado de desinsetização, considera a espécie, os acessos, os abrigos e a rotina do imóvel para definir uma intervenção precisa.',
    image: desinsetizacao,
    imageAlt: 'Inseto em superfície natural',
    idealFor: ['Cozinhas', 'Áreas de estoque', 'Áreas comuns', 'Ambientes comerciais'],
    details: {
      signs: [
        'Insetos rasteiros ou voadores aparecendo com frequência.',
        'Atividade concentrada perto de ralos, frestas, luminárias ou alimentos.',
        'Presença de ovos, asas ou outros vestígios em pontos protegidos.',
      ],
      approach: [
        'Identificação do tipo de inseto e dos locais de maior atividade.',
        'Leitura dos acessos, abrigos e condições que favorecem a ocorrência.',
        'Aplicação direcionada e orientação preventiva para o ambiente.',
      ],
      preparation: [
        'Guardar alimentos, utensílios e objetos expostos conforme a orientação recebida.',
        'Facilitar o acesso a rodapés, ralos, armários ou áreas indicadas.',
      ],
      aftercare: [
        'Seguir as instruções de ventilação, limpeza e retorno específicas do atendimento.',
        'Observar os pontos monitorados e comunicar recorrências à equipe.',
      ],
      faqs: [
        {
          question: 'O tratamento é igual para todos os insetos?',
          answer: 'Não. O tipo de inseto, o estágio da ocorrência e o ambiente influenciam a técnica e os pontos de aplicação.',
        },
        {
          question: 'Posso limpar o local logo após o serviço?',
          answer: 'A limpeza depende da técnica empregada. Siga o prazo e as áreas indicadas pela equipe para não reduzir o efeito do atendimento.',
        },
      ],
    },
  },
  {
    slug: 'desratizacao',
    name: 'Controle de roedores',
    short: 'Reduza a presença de roedores e novos focos com desratização técnica e preventiva.',
    description: 'O controle de roedores combina inspeção, desratização, pontos de controle protegidos e recomendações para reduzir fontes de abrigo, alimento e entrada.',
    image: desratizacao,
    imageAlt: 'Roedor em ambiente controlado',
    idealFor: ['Restaurantes', 'Depósitos', 'Condomínios', 'Residências'],
    details: {
      signs: [
        'Fezes, marcas de roedura ou embalagens danificadas.',
        'Ruídos em forros, depósitos ou áreas pouco movimentadas.',
        'Trilhas, manchas ou acessos próximos a paredes e tubulações.',
      ],
      approach: [
        'Inspeção dos indícios e dos possíveis pontos de entrada.',
        'Definição de pontos de controle protegidos e compatíveis com a rotina.',
        'Orientação para reduzir alimento, água, abrigo e novos acessos.',
      ],
      preparation: [
        'Organizar estoques e retirar fontes de alimento acessíveis.',
        'Informar áreas com circulação de crianças, animais ou pessoas não autorizadas.',
      ],
      aftercare: [
        'Não movimentar pontos de controle sem orientação.',
        'Manter vedação, organização e acompanhamento dos indícios encontrados.',
      ],
      faqs: [
        {
          question: 'O controle depende apenas da instalação de pontos de tratamento?',
          answer: 'Não. Reduzir acessos, abrigo, alimento e água é parte importante do controle e ajuda a prevenir novas ocorrências.',
        },
        {
          question: 'É necessário acompanhamento?',
          answer: 'A frequência depende dos indícios, do tipo de imóvel e do risco de reinfestação. A avaliação define se serão necessárias novas verificações.',
        },
      ],
    },
  },
  {
    slug: 'descupinizacao',
    name: 'Controle de cupins',
    short: 'Proteja móveis e estruturas com controle de cupins definido após inspeção técnica.',
    description: 'O controle de cupins, conhecido como descupinização, depende da espécie, da extensão observada e do tipo de estrutura. A inspeção orienta o tratamento adequado.',
    image: descupinizacao,
    imageAlt: 'Cupins em madeira',
    idealFor: ['Móveis', 'Estruturas de madeira', 'Imóveis residenciais', 'Ambientes comerciais'],
    details: {
      signs: [
        'Asas soltas, pequenos resíduos ou caminhos terrosos próximos à madeira.',
        'Peças com som oco, deformação ou perda aparente de resistência.',
        'Novos pontos de atividade em móveis, batentes, pisos ou estruturas.',
      ],
      approach: [
        'Inspeção dos sinais, materiais e extensão aparente da atividade.',
        'Identificação dos pontos que precisam de acesso ou tratamento.',
        'Definição da técnica de acordo com a estrutura e a ocorrência observada.',
      ],
      preparation: [
        'Liberar o acesso às peças e áreas indicadas para inspeção.',
        'Evitar desmontar ou descartar o material antes da avaliação, quando for seguro mantê-lo.',
      ],
      aftercare: [
        'Respeitar as orientações de uso e limpeza dos materiais tratados.',
        'Monitorar novos sinais e preservar medidas de prevenção contra umidade e acessos.',
      ],
      faqs: [
        {
          question: 'Todo dano em madeira é causado por cupim?',
          answer: 'Não. Diferentes agentes podem causar danos semelhantes. A inspeção ajuda a identificar os sinais antes de definir o tratamento.',
        },
        {
          question: 'O móvel precisa ser descartado?',
          answer: 'Isso depende do estado da peça e da extensão do dano. A avaliação técnica deve ocorrer antes de decidir pelo tratamento, reparo ou descarte.',
        },
      ],
    },
  },
  {
    slug: 'controle-de-pombos',
    name: 'Manejo de pombos',
    short: 'Reduza pouso e abrigo com manejo ambiental e barreiras adequadas à estrutura.',
    description: 'O manejo de pombos integra o controle de fauna sinantrópica nociva e avalia pontos de pouso, abrigo e acesso para definir barreiras compatíveis com o imóvel.',
    image: pombos,
    imageAlt: 'Pombos em área urbana',
    idealFor: ['Fachadas', 'Galpões', 'Condomínios', 'Áreas comerciais'],
    details: {
      signs: [
        'Pouso e permanência recorrentes em beirais, telhados ou equipamentos.',
        'Acúmulo de penas, materiais de ninho ou resíduos em áreas de circulação.',
        'Acessos usados repetidamente para abrigo ou alimentação.',
      ],
      approach: [
        'Mapeamento dos pontos de pouso, abrigo e entrada.',
        'Avaliação da estrutura e das barreiras compatíveis com o local.',
        'Orientação de limpeza, manutenção e redução de atrativos.',
      ],
      preparation: [
        'Informar áreas de difícil acesso e restrições de trabalho em altura.',
        'Isolar a circulação próxima aos pontos que serão avaliados, quando orientado.',
      ],
      aftercare: [
        'Manter barreiras e acessos conforme as instruções de conservação.',
        'Evitar oferta de alimento e observar novos pontos de pouso.',
      ],
      faqs: [
        {
          question: 'O controle é feito por remoção dos animais?',
          answer: 'A estratégia prioriza manejo do ambiente, redução de atrativos e barreiras compatíveis com a estrutura e as regras aplicáveis.',
        },
        {
          question: 'Qual barreira serve para qualquer imóvel?',
          answer: 'Não existe uma solução única. Material, acesso, manutenção e uso do imóvel precisam ser avaliados antes da recomendação.',
        },
      ],
    },
  },
  {
    slug: 'controle-integrado-de-pragas',
    name: 'Controle integrado',
    short: 'Previna infestações com controle integrado de vetores e pragas urbanas.',
    description: 'O controle integrado de vetores e pragas urbanas reúne inspeção, monitoramento, manejo ambiental, orientação preventiva e intervenções compatíveis com o risco do ambiente.',
    image: controleIntegrado,
    imageAlt: 'Formiga em área externa',
    idealFor: ['Empresas', 'Indústrias', 'Restaurantes', 'Condomínios'],
    details: {
      signs: [
        'Ocorrências recorrentes em diferentes setores ou períodos.',
        'Necessidade de histórico, monitoramento e ações preventivas.',
        'Ambientes com múltiplos acessos, estoques ou rotinas operacionais.',
      ],
      approach: [
        'Levantamento das áreas, riscos e histórico de ocorrências.',
        'Definição de pontos de inspeção, monitoramento e intervenção.',
        'Registro das observações e recomendações preventivas do ciclo.',
      ],
      preparation: [
        'Disponibilizar acesso às áreas e informar restrições operacionais.',
        'Compartilhar ocorrências recentes e mudanças na estrutura ou rotina.',
      ],
      aftercare: [
        'Executar as ações preventivas acordadas entre os ciclos.',
        'Registrar novos indícios para apoiar as próximas avaliações.',
      ],
      faqs: [
        {
          question: 'Controle integrado exige aplicação frequente de produtos?',
          answer: 'Não necessariamente. O programa combina inspeção, monitoramento, prevenção e intervenção conforme os indícios e o risco do ambiente.',
        },
        {
          question: 'A frequência é igual para todas as empresas?',
          answer: 'Não. Estrutura, atividade, histórico, riscos e rotina influenciam o plano e a periodicidade recomendada.',
        },
      ],
    },
  },
  {
    slug: 'higienizacao-de-caixa-dagua',
    name: "Limpeza de caixas d'água",
    short: "Cuide da água armazenada com limpeza e desinfecção técnica da caixa d'água.",
    description: "A limpeza e desinfecção de reservatórios de água, também buscada como higienização de caixa d'água, remove sujidades e prepara o sistema para retomar o uso conforme as orientações técnicas.",
    image: higienizacao,
    imageAlt: "Profissional realizando limpeza de caixa d'água",
    idealFor: ['Residências', 'Condomínios', 'Comércios', 'Empresas'],
    details: {
      signs: [
        'Prazo de manutenção interna definido pelo responsável pelo imóvel.',
        'Histórico de limpeza desconhecido ou sem registro disponível.',
        'Necessidade de organizar o serviço após manutenção do reservatório.',
      ],
      approach: [
        'Avaliação do acesso, do reservatório e das condições para execução.',
        'Organização da interrupção, limpeza, desinfecção e retorno do sistema.',
        'Orientação sobre conservação e registro do atendimento realizado.',
      ],
      preparation: [
        'Planejar o consumo e a interrupção de água conforme a orientação recebida.',
        'Garantir acesso seguro ao reservatório e informar restrições estruturais.',
      ],
      aftercare: [
        'Seguir a orientação para retorno do abastecimento após a limpeza e desinfecção.',
        'Manter o reservatório vedado e registrar a data para o planejamento futuro.',
      ],
      faqs: [
        {
          question: 'Quanto tempo o imóvel fica sem abastecimento?',
          answer: 'O período varia com o acesso, o volume, as condições do reservatório e a organização do sistema. A estimativa deve ser confirmada antes do agendamento.',
        },
        {
          question: 'A limpeza e desinfecção corrigem problemas estruturais?',
          answer: 'Não. Trincas, vedação, tampa, boia e outros componentes podem exigir manutenção específica antes ou depois do serviço.',
        },
      ],
    },
  },
  {
    slug: 'sanitizacao',
    name: 'Desinfecção de ambientes',
    short: 'Reforce a higiene do espaço com desinfecção técnica de superfícies e ambientes.',
    description: 'A limpeza e desinfecção de ambientes, também procurada como sanitização, considera o tipo de superfície, a circulação e a rotina do imóvel para definir produtos regularizados, aplicação e retorno de uso.',
    image: sanitizacao,
    imageAlt: 'Profissional com equipamento de aplicação em ambiente comercial',
    idealFor: ['Escritórios', 'Comércios', 'Condomínios', 'Áreas de circulação'],
    details: {
      signs: [
        'Necessidade de complementar a rotina de limpeza com desinfecção.',
        'Áreas de circulação ou superfícies que exigem planejamento específico.',
        'Retomada de uso após situações que demandam cuidado adicional com o espaço.',
      ],
      approach: [
        'Entendimento do objetivo, das superfícies e da circulação no local.',
        'Definição do produto, da aplicação e das áreas incluídas no atendimento.',
        'Orientação sobre preparação, ventilação e retorno de uso.',
      ],
      preparation: [
        'Realizar a limpeza habitual e liberar as áreas indicadas para aplicação.',
        'Informar materiais sensíveis, equipamentos e restrições de acesso.',
      ],
      aftercare: [
        'Respeitar o prazo e as condições de retorno informados para o atendimento.',
        'Manter a rotina de limpeza; a desinfecção não substitui a remoção de sujidades.',
      ],
      faqs: [
        {
          question: 'A desinfecção substitui a limpeza do ambiente?',
          answer: 'Não. A limpeza remove sujidades e prepara as superfícies; a desinfecção é uma etapa complementar definida conforme a necessidade do local.',
        },
        {
          question: 'Qualquer superfície pode receber a mesma aplicação?',
          answer: 'Não. Materiais, equipamentos e uso do espaço precisam ser informados para definir a compatibilidade e a orientação adequada.',
        },
      ],
    },
  },
];

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${company.address.street}, CEP ${company.address.postalCode}, ${company.address.city} - ${company.address.region}`,
)}`;

export const clients: Array<{ name: string; image: ImageMetadata }> = [
  { name: 'BGF Alimentos', image: bgfAlimentos },
  { name: 'BG Food', image: bgFood },
  { name: 'Feijão de Corda', image: feijaoDeCorda },
  { name: 'Rizzo Gourmet', image: rizzoGourmet },
  { name: 'KF Distribuidora', image: kfDistribuidora },
  { name: 'Perdizes', image: perdizes },
  { name: 'Sabesp', image: sabesp },
  { name: 'Amazo', image: amazo },
  { name: 'De Marchi', image: deMarchi },
  { name: 'Bom Gosto Hortifruti', image: bomGosto },
  { name: 'AVAgro', image: avagro },
  { name: 'Sacolão Lapa', image: sacolaoLapa },
  { name: 'CEAGESP', image: ceagesp },
  { name: 'Sacolão Higienópolis', image: sacolaoHigienopolis },
  { name: 'PegPese Hortifruti', image: pegPese },
];

export const whatsappUrl = (
  message: string,
  number = company.contacts.administration.number,
) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
