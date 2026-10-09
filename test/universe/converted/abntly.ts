// Converted from test/universe/corpus/abntly.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  cite,
  cm,
  define,
  dict,
  doc,
  external,
  figure,
  footnote,
  importPackage,
  inline,
  label,
  labelled,
  left,
  luma,
  m,
  outline,
  path,
  quote,
  raw,
  rect,
  ref,
  right,
  show,
  space,
  strong,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const abntly = external('abntly')
  const configInfo = define('config-info')
    .named('advisor', T.any, null)
    .named('author', T.any, null)
    .named('institution', T.content, [])
    .named('location', T.content, [])
    .named('program', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .named('work-type', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external()
  const cover = define('cover').returns(T.any).external()
  const titlePage = define('title-page').pos('arg1', T.content).returns(T.any).external()
  const catalogCard = define('catalog-card').returns(T.any).external()
  const approvalPage = define('approval-page')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .returns(T.any)
    .external()
  const abstract = define('abstract').pos('arg1', T.content).named('lang', T.any, null).returns(T.any).external()
  const keywords = define('keywords')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .returns(T.any)
    .external()
  const listOfFigures = define('list-of-figures').returns(T.any).external()
  const listOfFrames = define('list-of-frames').returns(T.any).external()
  const listOfTables = define('list-of-tables').returns(T.any).external()
  const listOfAcronyms = define('list-of-acronyms').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const autoRef = define('auto-ref').pos('arg1', T.any).returns(T.any).external()
  const source = define('source').returns(T.any).external()
  const frame = define('frame').pos('arg1', T.content).named('caption', T.content, []).returns(T.any).external()
  const fitted = define('fitted')
    .pos('arg1', T.content)
    .named('caption', T.content, [])
    .named('label', T.any, null)
    .returns(T.any)
    .external()
  const call_2 = define('call').pos('arg1', T.any).returns(T.any).external()
  const note = define('note').pos('arg1', T.content).named('call', T.any, null).returns(T.any).external()
  const noIndent = define('no-indent').pos('arg1', T.content).returns(T.any).external()
  const abntly_with = define('with').named('info', T.any, null).returns(T.any).external(abntly)
  return doc(
    importPackage('@preview/abntly:0.1.0', [
      abntly,
      configInfo,
      cover,
      titlePage,
      catalogCard,
      approvalPage,
      abstract,
      keywords,
      listOfFigures,
      listOfFrames,
      listOfTables,
      listOfAcronyms,
      autoRef,
      source,
      frame,
      fitted,
      call_2,
      note,
      noIndent,
    ]),
    show(
      abntly_with({
        info: configInfo({
          title: inline`Título do trabalho`,
          subtitle: inline`subtítulo, se houver`,
          author: 'Nome do Autor',
          advisor: 'Prof. Dr. Nome do Orientador',
          institution: inline`Universidade do Brasil`,
          program: inline`Programa de Pós-Graduação em Engenharia`,
          location: inline`Rio Branco`,
          year: 2026,
          workType: 'dissertation',
        }),
      }),
    ),
    inline(cover()),
    inline(
      titlePage(inline`${space}Dissertação apresentada ao Programa de Pós-Graduação em Engenharia da Universidade do
Brasil, como requisito parcial para a obtenção do título de Mestre em Engenharia.${space}`),
    ),
    inline(catalogCard()),
    inline(
      approvalPage(
        dict({
          title: inline`Prof. Dr.`,
          name: inline`Nome do Orientador`,
          role: inline`Orientador`,
          institution: inline`Universidade do Brasil`,
        }),
        {
          title: inline`Profa. Dra.`,
          name: inline`Nome da Convidada`,
          role: inline`Convidada`,
          institution: inline`Outra Universidade`,
        },
        {
          title: inline`Prof. Dr.`,
          name: inline`Nome do Convidado`,
          role: inline`Convidado`,
          institution: inline`Instituto de Pesquisa`,
        },
      ),
    ),
    inline(
      abstract(
        blocks(
          'O resumo apresenta, em um único parágrafo, o objetivo, o método, os resultados e as conclusões do trabalho. A NBR 6028:2021 recomenda de 150 a 500 palavras para os trabalhos acadêmicos e o uso do verbo na terceira pessoa. As palavras-chave são informadas logo abaixo do texto, uma em cada par de colchetes, com iniciais minúsculas, exceto os nomes próprios.',
          inline(keywords(inline`trabalhos acadêmicos`, inline`normalização`, inline`ABNT`, inline`Typst`)),
        ),
      ),
    ),
    inline(
      abstract(
        { lang: 'en' },
        blocks(
          'The abstract presents, in a single paragraph, the aim, the method, the results and the conclusions of the work. It is the translation of the abstract in the language of the work, followed by its keywords.',
          inline(keywords(inline`academic works`, inline`standardization`, inline`ABNT`, inline`Typst`)),
        ),
      ),
    ),
    inline(listOfFigures(), space, listOfFrames(), space, listOfTables()),
    inline(
      listOfAcronyms(dict({ key: 'abnt', short: 'ABNT', long: inline`Associação Brasileira de Normas Técnicas` }), {
        key: 'ibge',
        short: 'IBGE',
        long: inline`Instituto Brasileiro de Geografia e Estatística`,
      }),
    ),
    inline(outline()),
    m.heading(1, 'Introdução'),
    inline`Este modelo mostra a estrutura de um trabalho acadêmico formatado conforme as normas da ${ref(label('abnt'))}
e explica o formato de cada elemento. Substitua este texto pelo texto do seu trabalho. A introdução
apresenta o tema, os objetivos e as razões da elaboração do trabalho.`,
    'O texto é composto em tamanho 12, com espaçamento de 1,5 entre as linhas, e cada parágrafo começa com um recuo na primeira linha. Nada disso precisa ser configurado: basta escrever os parágrafos, separados por uma linha em branco.',
    m.heading(1, 'Desenvolvimento'),
    'O desenvolvimento detalha a pesquisa ou o estudo realizado. A norma não define os títulos das seções: eles ficam a critério do autor. As seções a seguir mostram como escrever cada elemento do texto.',
    m.heading(2, 'Seções e alíneas'),
    m.lines(
      inline`Cada seção primária começa em uma página nova. Os títulos são numerados automaticamente, até
a seção quinária. Os assuntos de uma seção que não têm título próprio são divididos em alíneas,
escritas com ${raw('+')}:`,
      m.enum(
        m.item(['o texto que antecede as alíneas termina em dois-pontos;']),
        m.item(
          m.lines(
            'cada alínea começa por letra minúscula e termina em ponto e vírgula:',
            m.list(
              m.item(['as subalíneas são escritas com', space, raw('-'), ', dentro de uma alínea;']),
              m.item(['a alínea que antecede as subalíneas termina em dois-pontos;']),
            ),
          ),
        ),
        m.item(['a última alínea termina em ponto final.']),
      ),
    ),
    m.heading(2, 'Citações e notas'),
    inline`As obras citadas são registradas no arquivo ${raw('refs.bib')} e citadas pela chave. A chamada
entre parênteses é escrita como ${raw('@luck2010')} e produz ${ref(label('luck2010'))}; com
a página, ${ref({ supplement: inline`p. 12` }, label('luck2010'))}. Quando o autor faz parte
da frase, usa-se a forma ${cite({ form: 'prose' }, label('tavares1953'))}. A citação direta
de até três linhas fica no texto, entre aspas. A citação direta com mais de três linhas é destacada,
com recuo de 4 cm, letra menor e espaço simples:`,
    inline(
      quote(
        { block: true },
        inline`${space}Texto de uma citação direta com mais de três linhas. A citação é destacada do parágrafo,
sem aspas, e a indicação da fonte, com a página, vem no fim do texto ${ref({ supplement: inline`p. 9` }, label('abnt2024'))}.${space}`,
      ),
    ),
    inline`As notas de rodapé são escritas com ${raw('#footnote[...]')}.${footnote(inline`As notas são numeradas ao longo de cada seção primária e ficam separadas do texto por um filete
de 5 cm.`)}`,
    m.heading(2, 'Ilustrações'),
    inline`Toda ilustração tem, acima dela, a palavra designativa, o número e o título; abaixo, a fonte,
que é obrigatória mesmo quando a ilustração é do próprio autor, e, se houver, a legenda e as
notas. A ${autoRef(label('fig-exemplo'))} mostra uma figura. No lugar do retângulo, use ${raw('image("arquivo.png", width: 8cm)')}.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Título da figura` },
            inline(space, rect({ width: cm(8), height: cm(3), fill: luma(220) }), space, source(), space),
          ),
          space,
        ],
        label('fig-exemplo'),
      ),
    ),
    inline`O quadro apresenta informações textuais, em linhas fechadas, como o ${ref({ supplement: inline`Quadro` }, label('qua-exemplo'))}.`,
    inline(
      labelled(
        [
          frame(
            { caption: inline`Tipos de trabalho acadêmico` },
            inline(
              space,
              table(
                { columns: 2 },
                inline(strong(inline`Tipo`)),
                inline(strong(inline`Grau`)),
                inline`Trabalho de conclusão de curso`,
                inline`Graduação`,
                inline`Dissertação`,
                inline`Mestrado`,
                inline`Tese`,
                inline`Doutorado`,
              ),
              space,
              source(),
              space,
            ),
          ),
          space,
        ],
        label('qua-exemplo'),
      ),
    ),
    m.heading(2, 'Tabelas'),
    inline`A tabela apresenta dados numéricos e segue as normas de apresentação tabular do ${ref(label('ibge'))}:
traços horizontais no topo, abaixo do cabeçalho e no fim, sem traços nas laterais. Dentro da
função ${raw('fitted')}, a tabela com cabeçalho (${raw('table.header')}) recebe os traços automaticamente,
como a ${ref({ supplement: inline`Tabela` }, label('tab-exemplo'))}. Uma tabela que não cabe
na página continua na página seguinte, com o cabeçalho repetido. Fora da função ${raw('fitted')},
uma tabela em um ${raw('figure')} comum recebe os mesmos traços escrita com ${raw('ibge-table')},
no lugar de ${raw('table')}; o título e a fonte ficam na largura do texto.`,
    inline(
      fitted(
        {
          label: label('tab-exemplo'),
          caption: inline`Trabalhos defendidos, por tipo -- Universidade do Brasil -- 2024-2025`,
        },
        inline(
          space,
          table(
            { columns: [cm(5), cm(2.5), cm(2.5)], align: [left, right, right] },
            table.header(inline`Tipo`, inline`2024`, inline`2025`),
            inline`Dissertações`,
            inline`86`,
            inline`94`,
            inline`Teses ${call_2(1)}`,
            inline`34`,
            inline`41`,
          ),
          space,
          source(),
          space,
          note({ call: 1 }, inline`Inclui as teses defendidas em cotutela.`),
          space,
        ),
      ),
    ),
    m.heading(2, 'Equações e remissões'),
    inline`Uma equação destacada é numerada quando tem um rótulo: ${labelled([unsafeRaw.math.block`a^2 + b^2 = c^2`, space], label('eq-pitagoras'))}`,
    inline(
      noIndent(inline`em que ${unsafeRaw.math`c`} é a hipotenusa. O texto que continua uma equação depois de uma linha
em branco começa sem o recuo da primeira linha com ${raw('no-indent')}.`),
    ),
    inline`A remissão ${raw('@eq-pitagoras')} produz o número, como em ${ref(label('eq-pitagoras'))}. Para
as figuras, as tabelas e as seções, a remissão pode levar a palavra (${raw('@fig-exemplo[Figura]')})
ou encontrá-la sozinha, com ${raw('#auto-ref(<fig-exemplo>)')}.`,
    m.heading(1, 'Conclusão'),
    'A conclusão retoma os objetivos do trabalho e apresenta os resultados alcançados.',
    inline(bibliography(path('refs.bib'))),
  )
}
