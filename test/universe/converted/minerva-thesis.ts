// Converted from test/universe/corpus/minerva-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  em,
  emph,
  external,
  importPackage,
  includeFile,
  inline,
  label,
  lorem,
  m,
  path,
  pt,
  show,
  smallcaps,
  space,
  sym,
  top,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const frontMatter = external('front-matter')
  const titlePage = define('title-page').returns(T.any).external()
  const hidePageNumber = external('hide-page-number')
  const setPageNumberWidth = define('set-page-number-width').pos('arg1', T.any).returns(T.any).external()
  const tableOfContents = external('table-of-contents')
  const listOfTables = external('list-of-tables')
  const listOfFigures = external('list-of-figures')
  const listOfAbbreviations = external('list-of-abbreviations')
  const chapter = external('chapter')
  const part = define('part').pos('arg1', T.any).named('label', T.any, null).returns(T.any).external()
  const appendix = external('appendix')
  const backMatter = external('back-matter')
  const thesis_with = define('with')
    .named('authors', T.any, null)
    .named('caption-position', T.any, null)
    .named('chapter-show', T.any, null)
    .named('counsellors', T.any, null)
    .named('date', T.content, [])
    .named('description', T.content, [])
    .named('faculty', T.any, null)
    .named('figure-fill', T.any, null)
    .named('font-size', T.any, null)
    .named('header-text', T.any, null)
    .named('keywords', T.any, null)
    .named('language', T.any, null)
    .named('paper', T.any, null)
    .named('subfigure-caption-sep', T.any, null)
    .named('subfigure-numbering', T.any, null)
    .named('supervisors', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(thesis)
  const frontMatter_with = define('with').named('show-headings', T.any, null).returns(T.any).external(frontMatter)
  return doc(
    importPackage('@preview/minerva-thesis:0.3.0', [
      thesis,
      frontMatter,
      titlePage,
      hidePageNumber,
      setPageNumberWidth,
      tableOfContents,
      listOfTables,
      listOfFigures,
      listOfAbbreviations,
      chapter,
      part,
      appendix,
      backMatter,
    ]),
    show(
      thesis_with({
        authors: ['Student 1', 'Student 2'],
        title: {
          en: inline`A nice thesis title -- ${lorem(10)}`,
          nl: inline`Een mooie masterproeftitel -- ${lorem(10)}${space}`,
        },
        keywords: { en: ["Master's thesis", 'Typst'], nl: ['Masterproef', 'Typst'] },
        date: inline`Academic year XXXX-YYYY`,
        description: inline`Master's dissertation submitted to obtain the academic degree of Master of Science in Some Discipline`,
        supervisors: [
          { en: inline`Prof. Aa Bbbb, Ph.D.`, nl: inline`Prof. dr. Aa Bbbb` },
          { en: inline`Prof. Cc Dddd, Ph.D.`, nl: inline`Prof. dr. Cc Dddd` },
        ],
        counsellors: { en: inline`Ee Ffff, Ph.D.`, nl: inline`Dr. Ee Ffff` },
        faculty: 'EA',
        language: 'en',
        paper: 'a4',
        fontSize: pt(11),
        chapterShow: false,
        figureFill: null,
        subfigureNumbering: '(a)',
        subfigureCaptionSep: sym.space,
        captionPosition: { table: top },
        headerText: [smallcaps, { size: em(0.9) }],
      }),
    ),
    show('et al.', inline(emph(inline`et al.`))),
    show(frontMatter_with({ showHeadings: false })),
    inline(titlePage()),
    m.lines(includeFile('FrontMatter/confidentiality.typ'), inline(hidePageNumber)),
    m.lines(includeFile('FrontMatter/explanation-exam.typ'), inline(hidePageNumber)),
    show(frontMatter),
    includeFile('FrontMatter/acknowledgement.typ'),
    includeFile('FrontMatter/use-of-ai.typ'),
    includeFile('FrontMatter/abstract.typ'),
    includeFile('FrontMatter/samenvatting.typ'),
    includeFile('FrontMatter/extended-abstract.typ'),
    includeFile('FrontMatter/uitgebreide-samenvatting.typ'),
    inline(setPageNumberWidth(em(2.3))),
    inline(tableOfContents),
    inline(setPageNumberWidth(em(1.2))),
    inline(listOfTables),
    inline(listOfFigures),
    inline(listOfAbbreviations),
    show(chapter),
    inline(part({ label: label('part:intro') }, 'Introduction')),
    includeFile('Ch1/ch1.typ'),
    show(appendix),
    includeFile('AppA/appA.typ'),
    m.lines(show(backMatter), inline(bibliography(path('references.yaml')))),
  )
}
