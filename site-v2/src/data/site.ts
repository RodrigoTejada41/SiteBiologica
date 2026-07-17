import type { ImageMetadata } from 'astro';

import dedetizacao from '../assets/services/img_dedetizacao.jpg';
import desinsetizacao from '../assets/services/img_desinsetizacao.jpg';
import desratizacao from '../assets/services/img_desratizacao.jpg';
import descupinizacao from '../assets/services/img_descupinizacao.jpg';
import pombos from '../assets/services/img_controle_pombos.jpg';
import controleIntegrado from '../assets/services/img_controle_pragas.jpg';
import higienizacao from '../assets/services/img_higienizacao.jpg';
import sanitizacao from '../assets/services/img_sanitizacao.jpg';

import arteVerde from '../assets/clients/img_arte_verde.jpg';
import deMarchi from '../assets/clients/img_de_marchi.jpg';
import feijaoDeCorda from '../assets/clients/img_feijao_corda.jpg';
import frugal from '../assets/clients/img_frugal.jpg';
import hetros from '../assets/clients/img_hetros.jpg';
import iw from '../assets/clients/img_iw.jpg';
import jeca from '../assets/clients/img_jeca.jpg';
import megadur from '../assets/clients/img_megadur.jpg';
import mixArabia from '../assets/clients/img_mix_arabia.jpg';
import pegPese from '../assets/clients/img_peg_pese.jpg';
import pizzaria from '../assets/clients/img_pizzaria.jpg';
import rizzo from '../assets/clients/img_rizzo.jpg';
import sabesp from '../assets/clients/img_sabesp.jpg';
import sacolao from '../assets/clients/img_sacolao.jpg';

export const company = {
  name: 'Evolução Biológica',
  legalLabel: 'Evolução Biológica Controle de Pragas',
  email: 'contato@evolucaobiologica.com',
  whatsappDisplay: '(11) 96586-2473',
  whatsappNumber: '5511965862473',
  phones: [
    { display: '(11) 5932-5173', href: 'tel:+551159325173' },
    { display: '(11) 5662-8235', href: 'tel:+551156628235' },
  ],
  hours: 'Segunda a sexta-feira, das 10h às 18h',
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
    name: 'Dedetização',
    short: 'Controle planejado para reduzir a presença de pragas em ambientes residenciais e profissionais.',
    description: 'O atendimento começa pela identificação do ambiente e dos pontos de atividade. A aplicação é definida de acordo com a necessidade encontrada e com as orientações de segurança do local.',
    image: dedetizacao,
    imageAlt: 'Insetos que exigem serviço de dedetização',
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
    name: 'Desinsetização',
    short: 'Tratamento direcionado para insetos rasteiros e voadores, conforme a ocorrência identificada.',
    description: 'A desinsetização considera o tipo de inseto, os acessos, os abrigos e a rotina do imóvel para orientar uma aplicação mais precisa.',
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
    name: 'Desratização',
    short: 'Diagnóstico de acessos e focos para controle de roedores e prevenção de novas ocorrências.',
    description: 'O serviço combina inspeção, definição dos pontos de controle e recomendações para reduzir fontes de abrigo, alimento e entrada.',
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
    name: 'Descupinização',
    short: 'Avaliação técnica para identificar sinais de cupins e definir o tratamento adequado ao material afetado.',
    description: 'A estratégia depende da espécie, da extensão observada e do tipo de estrutura. A inspeção é essencial para orientar o tratamento.',
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
    name: 'Controle de pombos',
    short: 'Medidas de manejo e barreira para reduzir pouso, abrigo e permanência de pombos.',
    description: 'O atendimento avalia pontos de pouso e acesso para recomendar soluções compatíveis com a estrutura e com o uso do imóvel.',
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
    name: 'Controle integrado de pragas',
    short: 'Acompanhamento contínuo para ambientes que precisam de prevenção, registro e ações recorrentes.',
    description: 'O controle integrado reúne inspeção, monitoramento, orientação preventiva e intervenções compatíveis com a necessidade do ambiente.',
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
          question: 'Controle integrado significa aplicação frequente de produtos?',
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
    name: "Higienização de caixa d'água",
    short: 'Limpeza programada para apoiar a conservação do reservatório e da qualidade da água armazenada.',
    description: 'O serviço é organizado para realizar a limpeza do reservatório com atenção ao acesso, à segurança e ao retorno de uso do sistema.',
    image: higienizacao,
    imageAlt: "Profissional realizando higienização de caixa d'água",
    idealFor: ['Residências', 'Condomínios', 'Comércios', 'Empresas'],
    details: {
      signs: [
        'Prazo de manutenção interna definido pelo responsável pelo imóvel.',
        'Histórico de limpeza desconhecido ou sem registro disponível.',
        'Necessidade de organizar o serviço após manutenção do reservatório.',
      ],
      approach: [
        'Avaliação do acesso, do reservatório e das condições para execução.',
        'Organização da interrupção, limpeza e retorno do sistema.',
        'Orientação sobre conservação e registro do atendimento realizado.',
      ],
      preparation: [
        'Planejar o consumo e a interrupção de água conforme a orientação recebida.',
        'Garantir acesso seguro ao reservatório e informar restrições estruturais.',
      ],
      aftercare: [
        'Seguir a orientação para retorno do abastecimento e verificação inicial.',
        'Manter o reservatório vedado e registrar a data para o planejamento futuro.',
      ],
      faqs: [
        {
          question: 'Quanto tempo o imóvel fica sem abastecimento?',
          answer: 'O período varia com o acesso, o volume, as condições do reservatório e a organização do sistema. A estimativa deve ser confirmada antes do agendamento.',
        },
        {
          question: 'A limpeza corrige problemas estruturais da caixa?',
          answer: 'Não. Trincas, vedação, tampa, boia e outros componentes podem exigir manutenção específica antes ou depois da higienização.',
        },
      ],
    },
  },
  {
    slug: 'sanitizacao',
    name: 'Sanitização',
    short: 'Aplicação técnica para apoiar a higienização de ambientes conforme a necessidade do local.',
    description: 'O atendimento considera circulação, superfícies e rotina do imóvel para planejar a aplicação e as orientações posteriores.',
    image: sanitizacao,
    imageAlt: 'Profissional com equipamento de aplicação em ambiente comercial',
    idealFor: ['Escritórios', 'Comércios', 'Condomínios', 'Áreas de circulação'],
    details: {
      signs: [
        'Necessidade de complementar a rotina de limpeza de um ambiente.',
        'Áreas de circulação ou superfícies que exigem planejamento específico.',
        'Retomada de uso após situações que demandam cuidado adicional com o espaço.',
      ],
      approach: [
        'Entendimento do objetivo, das superfícies e da circulação no local.',
        'Definição da aplicação e das áreas incluídas no atendimento.',
        'Orientação sobre preparação, ventilação e retorno de uso.',
      ],
      preparation: [
        'Realizar a limpeza habitual e liberar as áreas indicadas para aplicação.',
        'Informar materiais sensíveis, equipamentos e restrições de acesso.',
      ],
      aftercare: [
        'Respeitar o prazo e as condições de retorno informados para o atendimento.',
        'Manter a rotina de limpeza; sanitização não substitui conservação contínua.',
      ],
      faqs: [
        {
          question: 'Sanitização substitui a limpeza do ambiente?',
          answer: 'Não. A limpeza remove sujeira e prepara superfícies; a sanitização é uma etapa complementar definida conforme a necessidade do local.',
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
  { name: 'Arte Verde', image: arteVerde },
  { name: 'De Marchi', image: deMarchi },
  { name: 'Feijão de Corda', image: feijaoDeCorda },
  { name: 'Frugal', image: frugal },
  { name: 'Hetros', image: hetros },
  { name: 'iW', image: iw },
  { name: 'Jeca', image: jeca },
  { name: 'Megadur', image: megadur },
  { name: 'Mix Arabia', image: mixArabia },
  { name: 'Peg Pese', image: pegPese },
  { name: 'Pizzaria Tentação da Praia', image: pizzaria },
  { name: 'Rizzo', image: rizzo },
  { name: 'Sabesp', image: sabesp },
  { name: 'Sacolão Higienópolis', image: sacolao },
];

export const whatsappUrl = (message: string) =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
