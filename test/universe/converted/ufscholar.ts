// Converted from test/universe/corpus/ufscholar.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  em,
  emph,
  external,
  image,
  importFile,
  includeFile,
  inline,
  let_,
  linebreak,
  lorem,
  m,
  path,
  show,
  space,
  strong,
  symbol,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const coverPage = define('cover-page').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const titlePage = define('title-page').pos('arg1', T.content).returns(T.any).external()
  const indexCardPage = define('index-card-page').returns(T.any).external()
  const examiningBoard = define('examining-board')
    .pos('arg1', T.content)
    .named('board', T.any, null)
    .named('coordinator', T.any, null)
    .returns(T.any)
    .external()
  const dedicatory = define('dedicatory').pos('arg1', T.content).returns(T.any).external()
  const acknowledgments = define('acknowledgments').pos('arg1', T.content).returns(T.any).external()
  const epigraph = define('epigraph').pos('arg1', T.content).returns(T.any).external()
  const disclaimer = define('disclaimer')
    .pos('arg1', T.content)
    .named('date', T.any, null)
    .named('institution', T.any, null)
    .named('lang', T.any, null)
    .named('place', T.any, null)
    .named('signer', T.any, null)
    .returns(T.any)
    .external()
  const abstract = define('abstract').pos('arg1', T.content).named('lang', T.any, null).returns(T.any).external()
  const listOfFigures = define('list-of-figures').returns(T.any).external()
  const listOfTables = define('list-of-tables').returns(T.any).external()
  const listOfAcronymsAndSymbols = define('list-of-acronyms-and-symbols')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .returns(T.any)
    .external()
  const summary = define('summary').returns(T.any).external()
  const appendix = define('appendix').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const annex = define('annex').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const thesis_with = define('with')
    .named('address', T.any, null)
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('lang', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(thesis)
  const [acronymsDecl, acronyms] = let_('acronyms', [
    { key: 'abnt', short: 'ABNT', long: 'Brazilian Association of Technical Standards' },
    { key: 'tcc', short: 'TCC', long: 'Undergraduate Thesis', plural: 'TCCs', longplural: 'Undergraduate Theses' },
    { key: 'pfc', short: 'PFC', long: 'Final Year Project' },
  ])
  const [symbolsDecl, symbols] = let_('symbols', [
    { key: 'circum', short: unsafeRaw.math`C`, long: 'Circumference of a circle' },
    { key: 'pi', short: unsafeRaw.math`pi`, long: 'Pi number' },
    { key: 'radius', short: unsafeRaw.math`r`, long: 'Radius of a circle' },
    { key: 'area', short: unsafeRaw.math`A`, long: 'Area of a circle' },
  ])
  return doc(
    importFile('imports.typ', [
      thesis,
      coverPage,
      titlePage,
      indexCardPage,
      examiningBoard,
      dedicatory,
      acknowledgments,
      epigraph,
      disclaimer,
      abstract,
      listOfFigures,
      listOfTables,
      listOfAcronymsAndSymbols,
      summary,
      appendix,
      annex,
    ]),
    acronymsDecl,
    symbolsDecl,
    show(
      thesis_with({
        title: inline`Title of the dissertation${linebreak()} Can be broken into two lines`,
        subtitle: inline`Complementary subtitle, not more than two lines long`,
        author: "Author's complete name",
        address: [inline`${symbol('<')}City>`, inline`${symbol('<')}State/Province>`, inline`${symbol('<')}Country>`],
        date: datetime.today(),
        lang: 'en',
      }),
    ),
    inline(
      coverPage(
        image({ width: em(5) }, path('assets/brasao_UFSC_vertical_sigla.svg')),
        inline`${space}Federal University of Santa Catarina${linebreak()} Technology Center${linebreak()} Automation
and Systems Engineering${linebreak()} Undergraduate Course in Control and Automation engineering${space}`,
      ),
    ),
    inline(
      titlePage(inline`${space}Final report of the subject DAS5511 (Course Final Project) as a Concluding Dissertation
of the Undergraduate Course in Control and Automation Engineering of the Federal University
of Santa Catarina.${linebreak()} ${strong(inline`Supervisor`)}: Prof. XXXXXX, Dr.${linebreak()}
${strong(inline`Co-supervisor`)}: XXXXXX, Eng.${space}`),
    ),
    inline(indexCardPage()),
    inline(
      examiningBoard(
        {
          coordinator: ['Prof. XXXX, Dr.', 'Course Coordinator', null],
          board: [
            ['Prof. XXXXXX, Dr.', 'Advisor', 'UFSC/CTC/DAS'],
            ['XXXXXX, Eng.', 'Supervisor', 'Company/University XXXX'],
            ['Prof. XXXX, Dr.', 'Evaluator', 'Institution XXXX'],
            ['Prof. XXXX, Dr.', 'Board President', 'UFSC/CTC/DAS'],
          ],
        },
        inline`${space}This dissertation was evaluated in the context of the subject DAS5511 (Course Final
Project) and approved in its final form by the Undergraduate Course in Control and Automation
Engineering${space}`,
      ),
    ),
    inline(dedicatory(inline`${space}This work is dedicated to my classmates and my dear parants.${space}`)),
    inline(
      acknowledgments(
        blocks(
          'I would like to express my gratitude to the team of Typst (Martin Haug, Laurenz Mädje, Ana Gelez and all contributors) for developing a modern typesetting system that made this template possible.',
          'Their work has enabled a streamlined, efficient workflow and laid the foundation upon which this project builds.',
        ),
      ),
    ),
    inline(
      epigraph(inline`${space}${'"'}Text of the epigraph.${linebreak()} Citation related to the theme of the work.${linebreak()}
It is optional. The epigraph may also appear${linebreak()} at the beginning of each section
or chapter.${linebreak()} It must be prepared in accordance with NBR 10520."${linebreak()} (SURNAME
of the author of the epigraph, year)${space}`),
    ),
    inline(
      disclaimer(
        {
          place: '<City of signature>',
          signer: '<Full Name>',
          institution: '<Institution where the Final Year Project was carried out>',
          date: datetime.today(),
          lang: 'en',
        },
        inline`${space}As representative of the ${symbol('<')}PFC institution of execution${symbol('>')} in
which the present work was carried out, I declare this document to be exempt from any confidential
or sensitive content regarding intellectual property, that may keep it from being published
by the Federal University of Santa Catarina (UFSC) to the general public, including its online
availability in the Institutional Repository of the University Library (BU). Furthermore, I
attest knowledge of the obligation by the author, as a student of UFSC, to deposit this document
in the said Institutional Repository, for being it a Final Program Dissertation ("${emph(inline`Trabalho de Conclusão de Curso`)}"),
in accordance with the Resolução Normativa n° 126/2019/CUn.${space}`,
      ),
    ),
    inline(
      abstract(
        { lang: 'en' },
        blocks(
          'The abstract must succinctly highlight the content of a text. The order and extent of the elements depend on the type of abstract (informative or indicative) and the treatment each item receives in the original document. Should consist of a sequence of concise sentences in a single paragraph, without itemized topics. In technical or scientific documents, the informative abstract is recommended. It is advisable to use the verb in the third person. Its length is recommended to be 150 to 500 words for academic works and technical and/or scientific reports; 100 to 250 words for journal articles; or 50 to 100 words for any other documents. Immediately below the abstract must appear the keywords, preceded by the phrase Keywords, followed by a colon, separated by semicolons, and ending with a period, all lowercase except for proper nouns and scientific names.',
          inline`${strong(inline`Keywords`)}: article; article example; abstract; ABNT; Brazilian norm.`,
        ),
      ),
    ),
    inline(
      abstract(
        { lang: 'pt' },
        blocks(
          'O resumo deve ressaltar sucintamente o conteúdo de um texto. A ordem e a extensão dos elementos dependem do tipo de resumo (informativo ou indicativo) e do tratamento que cada item recebe no documento original. Ele deve ser composto por uma sequência de frases concisas em parágrafo único, sem enumeração de tópicos. Em documento técnico ou científico, recomenda-se o resumo informativo. Convém usar o verbo na terceira pessoa. É recomendado que seu tamanho seja 150 a 500 palavras nos trabalhos acadêmicos e relatórios técnicos e/ou científicos; 100 a 250 palavras nos artigos de periódicos; ou 50 a 100 palavras nos demais documentos. Logo abaixo do resumo devem aparecer as palavras-chave, antecedidas da expressão Palavras-chave, seguida de dois-pontos, separadas entre si por ponto e vírgula e finalizadas por ponto, em letras minúsculas exceto substantivos próprios e nomes científicos.',
          inline`${strong(inline`Palavras-chave`)}: artigo; exemplo de artigo; resumo; ABNT; norma brasileira.`,
        ),
      ),
    ),
    inline(
      listOfFigures(),
      space,
      listOfTables(),
      space,
      listOfAcronymsAndSymbols(acronyms, symbols),
      space,
      summary(),
    ),
    m.lines(
      includeFile('chapters/chapter_1.typ'),
      includeFile('chapters/chapter_2.typ'),
      includeFile('chapters/chapter_3.typ'),
      includeFile('chapters/chapter_4.typ'),
    ),
    inline(
      appendix(
        inline`Description 1`,
        blocks(
          'Texts written by the author to complement their argumentation. It must be preceded by the word APPENDIX, identified by consecutive uppercase letters, a dash, and the corresponding title. Double uppercase letters are used when the alphabet letters are exhausted.',
          m.heading(1, 'Test'),
          inline(lorem(80)),
          m.heading(2, 'Test'),
          inline(lorem(80)),
          m.heading(3, 'Test'),
          inline(lorem(80)),
          m.heading(4, 'Test'),
          inline(lorem(80)),
        ),
      ),
    ),
    inline(
      annex(
        inline`Description 2`,
        blocks(
          'These are documents not prepared by the author that serve as supporting material (maps, laws, statutes). It must be preceded by the word ANNEX, identified by consecutive uppercase letters, a dash, and the corresponding title. Double uppercase letters are used when the alphabet letters are exhausted.',
          m.heading(1, 'Test'),
          inline(lorem(100)),
          m.heading(1, 'Test 2'),
          inline(lorem(100)),
          m.heading(2, '3'),
          inline(lorem(100)),
        ),
      ),
    ),
  )
}
