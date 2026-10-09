// Converted from test/universe/corpus/fei-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  dict,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  m,
  path,
  read,
  show,
  space,
  sym,
} from '../../../src/index.ts'

export default () => {
  const feiThesis = external('fei-thesis')
  const feiSetup = external('fei-setup')
  const feiCoverPage = define('fei-cover-page').returns(T.any).external()
  const feiTitlePage = define('fei-title-page').returns(T.any).external()
  const feiAssignment = define('fei-assignment')
    .pos('arg1', T.any)
    .named('pages', T.any, null)
    .returns(T.any)
    .external()
  const feiThanks = define('fei-thanks').pos('arg1', T.content).returns(T.any).external()
  const feiAbstract = define('fei-abstract')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('lang', T.any, null)
    .returns(T.any)
    .external()
  const startNumbering = external('start-numbering')
  const feiOutline = define('fei-outline').returns(T.any).external()
  const feiListOfManualGlossaries = define('fei-list-of-manual-glossaries')
    .pos('arg1', T.content)
    .returns(T.any)
    .external()
  const feiOutlineAlgorithms = define('fei-outline-algorithms').returns(T.any).external()
  const feiOutlineCode = define('fei-outline-code').returns(T.any).external()
  const feiOutlineFiguresTables = define('fei-outline-figures-tables').returns(T.any).external()
  const feiIntroduction = define('fei-introduction').pos('arg1', T.content).returns(T.any).external()
  const feiCore = define('fei-core').pos('arg1', T.content).returns(T.any).external()
  const feiConclusion = define('fei-conclusion').pos('arg1', T.content).returns(T.any).external()
  const feiAiDeclaration = define('fei-ai-declaration').pos('arg1', T.content).returns(T.any).external()
  const feiAppendix = define('fei-appendix').pos('arg1', T.content).returns(T.any).external()
  const feiThesis_with = define('with').named('language', T.any, null).returns(T.any).external(feiThesis)
  const feiSetup_with = define('with').pos('arg1', T.any).returns(T.any).external(feiSetup)
  const startNumbering_with = define('with').returns(T.any).external(startNumbering)
  return doc(
    importPackage('@preview/fei-thesis:0.0.8', [
      feiThesis,
      feiSetup,
      feiCoverPage,
      feiTitlePage,
      feiAssignment,
      feiThanks,
      feiAbstract,
      startNumbering,
      feiOutline,
      feiListOfManualGlossaries,
      feiOutlineAlgorithms,
      feiOutlineCode,
      feiOutlineFiguresTables,
      feiIntroduction,
      feiCore,
      feiConclusion,
      feiAiDeclaration,
      feiAppendix,
    ]),
    show(feiThesis_with({ language: 'sk' })),
    show(
      feiSetup_with(
        dict({
          title: inline`Rozšírená šablóna záverečnej práce na FEI STU v${sym.space.nobreak}Bratislave v systéme Typst`,
          author: 'RNDr. Juraj Chlpík, PhD.',
          'reg-nr': inline`FEI-xxxx-xxxx`,
          date: blocks(m.enum(m.numbered(31, ['decembra 2024']))),
          year: inline`2024`,
          'thesis-type': inline`Bakalárska práca`,
          'study-programme': inline`názov študijného programu`,
          'study-field': inline`názov študijného odboru`,
          school: inline`Slovenská technická univerzita v Bratislave`,
          faculty: inline`Fakulta elektrotechniky a informatiky`,
          supervisor: inline`tituly Meno Priezvisko, tituly`,
          consultant: inline`tituly Meno Priezvisko, tituly`,
          'training-workplace': inline`Názov školiaceho pracoviska`,
        }),
      ),
    ),
    inline(
      feiCoverPage(),
      space,
      feiTitlePage(),
      space,
      feiAssignment({ pages: 2 }, read({ encoding: null }, path('includes/assignment.pdf'))),
    ),
    inline(feiThanks(blocks(includeFile('includes/thanks.typ')))),
    inline(
      feiAbstract(
        { lang: 'sk' },
        blocks(includeFile('includes/abstractSK.typ')),
        inline`záverečná práca, šablóna, Typst, formátovanie textu, citácie`,
      ),
    ),
    inline(
      feiAbstract(
        { lang: 'en' },
        blocks(includeFile('includes/abstractEN.typ')),
        inline`Final thesis, template, Typst, text formatting, citations`,
      ),
    ),
    show(startNumbering_with()),
    inline(
      feiOutline(),
      space,
      feiListOfManualGlossaries(blocks(includeFile('includes/manual_glossary.typ'))),
      space,
      feiOutlineAlgorithms(),
      space,
      feiOutlineCode(),
      space,
      feiOutlineFiguresTables(),
    ),
    inline(feiIntroduction(blocks(includeFile('includes/introduction.typ')))),
    inline(
      feiCore(blocks(includeFile('includes/core.typ'))),
      space,
      feiConclusion(blocks(includeFile('includes/conclusion.typ'))),
    ),
    inline(
      bibliography(path('bibliography.bib')),
      space,
      feiAiDeclaration(blocks(includeFile('includes/ai_declaration.typ'))),
    ),
    inline(
      feiAppendix(
        blocks(
          m.lines(
            includeFile('includes/appendixA.typ'),
            includeFile('includes/appendixB.typ'),
            includeFile('includes/appendixC.typ'),
          ),
        ),
      ),
    ),
  )
}
