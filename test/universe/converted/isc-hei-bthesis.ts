// Converted from test/universe/corpus/isc-hei-bthesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cm,
  datetime,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  footnote,
  image,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  let_,
  link,
  m,
  pagebreak,
  path,
  raw,
  read,
  ref,
  show,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const school = external('school')
  const pageTitle = define('page-title')
    .pos('arg1', T.any)
    .named('bottom', T.any, null)
    .named('mult', T.any, null)
    .named('top', T.any, null)
    .returns(T.any)
    .external()
  const i18n = define('i18n').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const cleardoublepage = define('cleardoublepage').returns(T.any).external()
  const declarationOfHonour = define('declaration-of-honour').returns(T.any).external()
  const todo = define('todo').pos('arg1', T.content).returns(T.any).external()
  const loremPars = define('lorem-pars').pos('arg1', T.any).returns(T.any).external()
  const theBibliography = define('the-bibliography')
    .named('bib-file', T.any, null)
    .named('full', T.any, null)
    .named('style', T.any, null)
    .returns(T.any)
    .external()
  const appendixPage = define('appendix-page').returns(T.any).external()
  const tableOfFigures = define('table-of-figures').returns(T.any).external()
  const codeSamples = define('code-samples').returns(T.any).external()
  const code = define('code').pos('arg1', T.content).returns(T.any).external()
  const thesis_with = define('with')
    .named('authors', T.any, null)
    .named('code-theme', T.any, null)
    .named('date', T.any, null)
    .named('keywords', T.any, null)
    .named('language', T.any, null)
    .named('major', T.any, null)
    .named('programme', T.any, null)
    .named('project-repos', T.any, null)
    .named('revision', T.any, null)
    .named('school', T.any, null)
    .named('signature', T.any, null)
    .named('subtitle', T.any, null)
    .named('thesis-co-supervisor', T.any, null)
    .named('thesis-expert', T.any, null)
    .named('thesis-id', T.any, null)
    .named('thesis-supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(thesis)
  const printIndex = define('print-index')
    .named('delimiter', T.any, null)
    .named('outlined', T.any, null)
    .named('row-gutter', T.any, null)
    .named('sorted', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const [doc_languageDecl, doc_language] = let_('doc_language', 'en')
  const acronymTable = define('acronym-table')
    .returns(T.any)
    .body((p) =>
      printIndex({
        title: pageTitle({ mult: 1, top: em(1), bottom: em(1) }, i18n(doc_language, 'acronym-table-title')),
        sorted: 'up',
        delimiter: ' : ',
        rowGutter: em(0.7),
        outlined: false,
      }),
    )
  const [code_sampleDecl, code_sample] = let_('code_sample', read(path('code/sample.scala')))
  return doc(
    importPackage('@preview/isc-hei-bthesis:0.8.1', [
      thesis,
      school,
      pageTitle,
      i18n,
      cleardoublepage,
      declarationOfHonour,
      todo,
      loremPars,
      theBibliography,
      appendixPage,
      tableOfFigures,
      codeSamples,
      code,
    ]),
    inline(doc_languageDecl),
    show(
      thesis_with({
        title: 'Life, the Universe and Everything',
        subtitle:
          'An exploration of the intersection between computer science and engineering, focusing on their impact on modern technological advancements.',
        authors: 'Margaret Hamilton',
        language: doc_language,
        thesisSupervisor: 'Prof. Dr John von Neumann',
        thesisCoSupervisor: 'Lady Ada Lovelace',
        thesisExpert: 'Dr Grace Hopper',
        thesisId: 'ISC-ID-26-1',
        projectRepos: 'https://github.com/ISC-HEI/isc-hei-typst-templates',
        school: "Haute École d'Ingénierie de Sion",
        programme: 'Informatique et systèmes de communication (ISC)',
        keywords: ['engineering', 'data', 'machine learning', 'meteorology'],
        major: 'Data engineering',
        date: datetime({ year: 2026, month: 6, day: 30 }),
        signature: image({ width: cm(4.5) }, path('figs/signature_placeholder.svg')),
        revision: '1.0',
        codeTheme: 'bluloco-light',
      }),
    ),
    m.lines(importPackage('@preview/acrostiche:0.7.0', [printIndex]), includeFile('acronyms.typ')),
    acronymTable.decl,
    inline(cleardoublepage(), space, includeFile('pages/abstract.typ')),
    inline(cleardoublepage(), space, includeFile('pages/résumé.typ')),
    inline(cleardoublepage(), space, declarationOfHonour()),
    inline(cleardoublepage(), space, includeFile('pages/acknowledgements.typ')),
    m.heading(1, 'Writing a thesis'),
    inline`Writing a report is an exercise that involves both ${strong(inline`content`)} and ${strong(inline`form`)}.
In this document, we aim to simplify the formatting aspect without making any assumptions about
the content, specifically in the context of the ISC degree programme${footnote(inline`Here is how to add a footnote ${link('https://isc.hevs.ch')}`)}.`,
    m.heading(2, 'The content of a thesis'),
    'The general structure of a bachelor thesis typically includes the following sections:',
    m.enum(
      m.numbered(1, [
        strong(inline`Abstract`),
        ': A concise summary of the thesis, including the research question, methodology, results, and conclusions.',
      ]),
      m.numbered(2, [strong(inline`Résumé`), ': A summary of the thesis in French.']),
      m.numbered(3, [
        strong(inline`Acknowledgements`),
        ': [Optional] A section to thank those who supported your work.',
      ]),
      m.numbered(4, [strong(inline`Table of Contents`), ': An organized list of chapters and sections.']),
      m.numbered(5, [
        strong(inline`Introduction`),
        ': Presents the background/context, motivation, objectives, and scope and plan of the thesis.',
      ]),
      m.numbered(6, [
        strong(inline`State of the Art / Literature Review`),
        ': Reviews existing research and situates the thesis within the academic context, if relevant to your work.',
      ]),
      m.numbered(7, [
        strong(inline`Development and Methodology`),
        ': Describes the methods, materials, and procedures used in the research/thesis.',
      ]),
      m.numbered(8, [
        strong(inline`Results`),
        ': Presents the findings of the research, often with tables, figures, and analysis.',
      ]),
      m.numbered(9, [
        strong(inline`Discussion`),
        ': Interprets the results, discusses implications, and relates findings to the research question.',
      ]),
      m.numbered(10, [
        strong(inline`Conclusion`),
        ': Summarizes the main findings and contributions, and suggests future work.',
      ]),
      m.numbered(11, [strong(inline`References / Bibliography`), ': Lists all sources cited in the thesis.']),
      m.numbered(12, [
        strong(inline`Appendices`),
        ': (Optional) Contains supplementary material such as raw data, code, or additional explanations.',
      ]),
    ),
    inline`This structure may vary depending on the field of study, but these elements are commonly found
in most bachelor theses. They are recommended for the ${emph(inline`ISC Bachelor thesis`)} and
should be adapted to the specific requirements of your thesis (e.g., if you have a state of
the art section or not).`,
    'You can also change the order or the names of the sections, for instance, if you want to put the state of the art before the introduction, or if you want to add a section on methodology before the results.',
    m.lines(
      m.heading(2, 'Academic titles'),
      'Please note that the academic titles of your supervisors and experts are important.',
    ),
    inline`They should be included on the cover page, and you should use the correct title when addressing
them in the acknowledgements section. For instance, a professor should be addressed as "Prof.
[Name]", while a doctor should be addressed as "Dr [Name]" (${strong(inline`without a colon!`)}).
A professor who is also a doctor should be addressed as "Prof. Dr [Name]".`,
    'If you are unsure about the title of your supervisor, co-supervisor, or expert, you can ask them directly or check their profile on the university website.',
    m.heading(2, 'Compiling the thesis'),
    inline`If you compile your thesis using the ${raw('typst')} command line tool, or by using the ${raw('typst')}
extension in Visual Studio Code, please not that you must install the fonts used in this template.
You can do so by running the following command in your terminal:`,
    inline(raw({ block: true, lang: 'bash' }, './fonts/install_fonts.sh')),
    m.lines(
      m.heading(1, 'Introduction'),
      inline`Have fun ${todo(inline`writing your thesis!`)} and good luck with it !${footnote(inline`And should your build server ever refuse to brew coffee, remember it may simply be a teapot
${ref(label('rfc2324'))}.`)}`,
    ),
    inline(
      labelled(
        [figure({ caption: inline`Grace Hopper` }, image({ height: cm(4) }, path('figs/pixelize.png'))), space],
        label('fig_engineer'),
      ),
    ),
    inline(loremPars(600)),
    m.lines(m.heading(1, 'Development and Methodology 1'), inline(loremPars(1500))),
    m.lines(m.heading(1, 'Development and Methodology 2'), inline(loremPars(1500))),
    m.lines(m.heading(1, 'Development and Methodology 3'), inline(loremPars(1500))),
    m.lines(m.heading(1, 'Development and Methodology 4'), inline(loremPars(1500))),
    m.lines(m.heading(1, 'Development and Methodology 5'), inline(loremPars(1500))),
    m.lines(m.heading(1, 'Development and Methodology 6'), inline(loremPars(1500))),
    m.lines(m.heading(1, 'Development and Methodology 7'), inline(loremPars(1500))),
    m.lines(m.heading(1, 'Results and Discussion'), inline(loremPars(950))),
    inline(loremPars(950)),
    inline(loremPars(950)),
    m.lines(m.heading(1, 'Conclusion'), inline(loremPars(1200))),
    inline(pagebreak()),
    inline(theBibliography({ bibFile: read({ encoding: null }, path('bibliography.bib')), full: true, style: 'ieee' })),
    inline(cleardoublepage(), space, appendixPage(), space, pagebreak()),
    inline(acronymTable()),
    inline(pagebreak()),
    inline(tableOfFigures()),
    inline(pagebreak(), space, codeSamples()),
    code_sampleDecl,
    inline(
      figure(
        { caption: 'Code included from the file example.scala' },
        code(inline(space, raw({ lang: 'scala' }, code_sample), space)),
      ),
    ),
    inline(
      figure(
        { caption: 'Second code included from the file example.scala' },
        code(inline(space, raw({ lang: 'python' }, read(path('code/sort.py'))), space)),
      ),
    ),
    inline(
      figure(
        { caption: 'Second code included from the file example.scala' },
        code(inline(space, raw({ lang: 'scala' }, code_sample), space)),
      ),
    ),
  )
}
