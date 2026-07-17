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
  },
  {
    slug: 'desinsetizacao',
    name: 'Desinsetização',
    short: 'Tratamento direcionado para insetos rasteiros e voadores, conforme a ocorrência identificada.',
    description: 'A desinsetização considera o tipo de inseto, os acessos, os abrigos e a rotina do imóvel para orientar uma aplicação mais precisa.',
    image: desinsetizacao,
    imageAlt: 'Inseto em superfície natural',
    idealFor: ['Cozinhas', 'Áreas de estoque', 'Áreas comuns', 'Ambientes comerciais'],
  },
  {
    slug: 'desratizacao',
    name: 'Desratização',
    short: 'Diagnóstico de acessos e focos para controle de roedores e prevenção de novas ocorrências.',
    description: 'O serviço combina inspeção, definição dos pontos de controle e recomendações para reduzir fontes de abrigo, alimento e entrada.',
    image: desratizacao,
    imageAlt: 'Roedor em ambiente controlado',
    idealFor: ['Restaurantes', 'Depósitos', 'Condomínios', 'Residências'],
  },
  {
    slug: 'descupinizacao',
    name: 'Descupinização',
    short: 'Avaliação técnica para identificar sinais de cupins e definir o tratamento adequado ao material afetado.',
    description: 'A estratégia depende da espécie, da extensão observada e do tipo de estrutura. A inspeção é essencial para orientar o tratamento.',
    image: descupinizacao,
    imageAlt: 'Cupins em madeira',
    idealFor: ['Móveis', 'Estruturas de madeira', 'Imóveis residenciais', 'Ambientes comerciais'],
  },
  {
    slug: 'controle-de-pombos',
    name: 'Controle de pombos',
    short: 'Medidas de manejo e barreira para reduzir pouso, abrigo e permanência de pombos.',
    description: 'O atendimento avalia pontos de pouso e acesso para recomendar soluções compatíveis com a estrutura e com o uso do imóvel.',
    image: pombos,
    imageAlt: 'Pombos em área urbana',
    idealFor: ['Fachadas', 'Galpões', 'Condomínios', 'Áreas comerciais'],
  },
  {
    slug: 'controle-integrado-de-pragas',
    name: 'Controle integrado de pragas',
    short: 'Acompanhamento contínuo para ambientes que precisam de prevenção, registro e ações recorrentes.',
    description: 'O controle integrado reúne inspeção, monitoramento, orientação preventiva e intervenções compatíveis com a necessidade do ambiente.',
    image: controleIntegrado,
    imageAlt: 'Formiga em área externa',
    idealFor: ['Empresas', 'Indústrias', 'Restaurantes', 'Condomínios'],
  },
  {
    slug: 'higienizacao-de-caixa-dagua',
    name: "Higienização de caixa d'água",
    short: 'Limpeza programada para apoiar a conservação do reservatório e da qualidade da água armazenada.',
    description: 'O serviço é organizado para realizar a limpeza do reservatório com atenção ao acesso, à segurança e ao retorno de uso do sistema.',
    image: higienizacao,
    imageAlt: "Profissional realizando higienização de caixa d'água",
    idealFor: ['Residências', 'Condomínios', 'Comércios', 'Empresas'],
  },
  {
    slug: 'sanitizacao',
    name: 'Sanitização',
    short: 'Aplicação técnica para apoiar a higienização de ambientes conforme a necessidade do local.',
    description: 'O atendimento considera circulação, superfícies e rotina do imóvel para planejar a aplicação e as orientações posteriores.',
    image: sanitizacao,
    imageAlt: 'Profissional com equipamento de aplicação em ambiente comercial',
    idealFor: ['Escritórios', 'Comércios', 'Condomínios', 'Áreas de circulação'],
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
