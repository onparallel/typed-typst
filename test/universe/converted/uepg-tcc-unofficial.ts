// Converted from test/universe/corpus/uepg-tcc-unofficial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  bibliography,
  black,
  blocks,
  center,
  define,
  doc,
  external,
  figure,
  importPackage,
  inline,
  label,
  labelled,
  left,
  m,
  path,
  pt,
  raw,
  ref,
  show,
  space,
  strong,
  sym,
  table,
} from '../../../src/index.ts'

export default () => {
  const monografia = external('monografia')
  const citacaoLonga = define('citacao-longa').pos('arg1', T.content).returns(T.any).external()
  const monografia_with = define('with')
    .named('abstract', T.content, [])
    .named('agradecimentos', T.content, [])
    .named('ano', T.any, null)
    .named('autor', T.any, null)
    .named('curso', T.any, null)
    .named('dedicatoria', T.content, [])
    .named('departamento', T.any, null)
    .named('epigrafe', T.content, [])
    .named('keywords', T.any, null)
    .named('lista-abreviaturas', T.any, null)
    .named('local', T.any, null)
    .named('nota-apresentacao', T.any, null)
    .named('orientadores', T.any, null)
    .named('palavras-chave', T.any, null)
    .named('resumo', T.content, [])
    .named('titulo', T.any, null)
    .returns(T.any)
    .external(monografia)
  return doc(
    importPackage('@preview/uepg-tcc-unofficial:0.1.0', [monografia, citacaoLonga]),
    show(
      monografia_with({
        titulo: 'TÍTULO DO TRABALHO DE CONCLUSÃO DE CURSO',
        autor: 'NOME COMPLETO DO AUTOR',
        orientadores: ['Prof. Dr. Nome do Orientador'],
        notaApresentacao:
          'Trabalho de Conclusão de Curso apresentado para obtenção do título de Bacharel em Engenharia de Software, Setor de Engenharias, Ciências Agrárias e de Tecnologia da Universidade Estadual de Ponta Grossa.',
        curso: 'BACHARELADO EM ENGENHARIA DE SOFTWARE',
        departamento: 'DEPARTAMENTO DE INFORMÁTICA',
        local: 'PONTA GROSSA',
        ano: '2026',
        dedicatoria: inline`${space}Dedico este trabalho a todos que contribuíram para minha formação acadêmica.${space}`,
        agradecimentos: blocks(
          'Agradeço primeiramente à minha família pelo apoio incondicional durante toda a graduação.',
          'Ao meu orientador, Prof. Dr. Nome do Orientador, pela dedicação, paciência e orientação durante o desenvolvimento deste trabalho.',
          'Aos professores do Departamento de Informática da UEPG, pelos ensinamentos e contribuições ao longo do curso.',
          'Aos colegas de turma, pelas trocas de conhecimento e companheirismo.',
        ),
        epigrafe: blocks(
          inline`"A única maneira de fazer um bom trabalho é amar o que você faz."`,
          inline`--- Steve Jobs`,
        ),
        resumo: inline`${space}Este trabalho apresenta uma análise sobre o tema proposto, abordando seus principais
aspectos teóricos e práticos. Inicialmente, é realizada uma revisão bibliográfica dos conceitos
fundamentais relacionados ao tema. Em seguida, são descritos os materiais e métodos utilizados
para o desenvolvimento do trabalho. Os resultados obtidos são apresentados e discutidos à luz
da literatura existente. Por fim, são apresentadas as conclusões e sugestões para trabalhos
futuros. O resumo deve conter entre 150 e 500 palavras, em parágrafo único, espaçamento simples,
sem recuo na primeira linha.${space}`,
        palavrasChave: ['Palavra-chave 1', 'Palavra-chave 2', 'Palavra-chave 3', 'Palavra-chave 4'],
        abstract: inline`${space}This work presents an analysis of the proposed topic, addressing its main theoretical
and practical aspects. Initially, a bibliographic review of the fundamental concepts related
to the topic is carried out. Next, the materials and methods used for the development of the
work are described. The results obtained are presented and discussed in light of the existing
literature. Finally, conclusions and suggestions for future work are presented. The abstract
should contain between 150 and 500 words, in a single paragraph, single-spaced, without first-line
indentation.${space}`,
        keywords: ['Keyword 1', 'Keyword 2', 'Keyword 3', 'Keyword 4'],
        listaAbreviaturas: [
          ['ABNT', 'Associação Brasileira de Normas Técnicas'],
          ['UEPG', 'Universidade Estadual de Ponta Grossa'],
          ['TCC', 'Trabalho de Conclusão de Curso'],
        ],
      }),
    ),
    m.heading(1, 'Introdução'),
    inline`Este é um exemplo de documento formatado com a template ${raw('monografia-uepg')}, que segue
as normas da ABNT conforme o Guia de Normalização da Universidade Estadual de Ponta Grossa.`,
    'O primeiro parágrafo de cada seção possui recuo de 1,25 cm, assim como todos os demais parágrafos do texto. O espaçamento entre linhas é de 1,5 e o texto é justificado.',
    m.heading(2, 'Objetivos'),
    m.heading(3, 'Objetivo geral'),
    'Descrever o objetivo geral do trabalho de forma clara e concisa.',
    m.heading(3, 'Objetivos específicos'),
    'Os objetivos específicos devem detalhar as etapas necessárias para atingir o objetivo geral.',
    m.heading(1, 'Referencial teórico'),
    'Esta seção apresenta os conceitos fundamentais necessários para a compreensão do trabalho. As citações devem seguir o padrão ABNT.',
    'Exemplo de citação indireta: Segundo Silva (2020), os sistemas modernos oferecem vantagens significativas sobre métodos tradicionais.',
    inline`Exemplo de citação direta curta: O autor afirma que "a tecnologia transformou significativamente
os processos organizacionais" ${ref(label('exemplo1'))}.`,
    'Exemplo de citação longa (mais de três linhas):',
    inline(
      citacaoLonga(inline`${space}As citações longas devem ser destacadas com recuo de 4 cm da margem esquerda, com letra
menor que a do texto (tamanho 10), sem aspas e com espaçamento simples. A citação longa deve
conter mais de três linhas e seguir as normas estabelecidas pela ABNT NBR 10520 ${ref(label('exemplo2'))}.${space}`),
    ),
    m.heading(2, 'Exemplo de quadro'),
    'Os quadros são utilizados para apresentar informações qualitativas e textuais, com bordas fechadas em todos os lados.',
    inline(
      labelled(
        [
          figure(
            { caption: inline`Classificação dos tipos estudados`, kind: 'quadro', supplement: inline`Quadro` },
            table(
              { columns: [auto, auto], stroke: add(pt(1), black), inset: pt(10), align: [center, left] },
              table.header(inline(strong(inline`Categoria`)), inline(strong(inline`Descrição`))),
              inline`Tipo A`,
              inline`Descrição da primeira categoria com suas características principais.`,
              inline`Tipo B`,
              inline`Descrição da segunda categoria com suas características principais.`,
              inline`Tipo C`,
              inline`Descrição da terceira categoria com suas características principais.`,
            ),
          ),
          space,
        ],
        label('quadro-exemplo'),
      ),
    ),
    inline`O ${ref(label('quadro-exemplo'))} apresenta a classificação utilizada neste trabalho.`,
    m.heading(1, 'Metodologia'),
    'Nesta seção, descreva os materiais e métodos utilizados para o desenvolvimento do trabalho.',
    m.heading(1, 'Resultados e discussão'),
    'Apresente os resultados obtidos e discuta-os à luz da literatura existente.',
    m.heading(1, 'Conclusão'),
    'Apresente as conclusões do trabalho e sugestões para trabalhos futuros.',
    inline(bibliography({ title: 'REFERÊNCIAS', style: 'associacao-brasileira-de-normas-tecnicas' }, path('refs.bib'))),
  )
}
