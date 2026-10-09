// Converted from test/universe/corpus/easy-hgb-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  codeBlock,
  define,
  doc,
  document,
  external,
  importFile,
  importPackage,
  includeFile,
  m,
  path,
  set,
  show,
  strong,
  table,
  text,
  unsafeRaw,
  where,
} from '../../../src/index.ts'

export default () => {
  const LICENSE_TYPES = external('LICENSE_TYPES')
  const WORK_TYPES = external('WORK_TYPES')
  const copyrightPage = external('copyright-page')
  const fullThesis = external('full-thesis')
  const titlepage = define('titlepage')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('work-type', T.any, null)
    .returns(T.any)
    .external()
  const abbr = external('abbr')
  const fullThesis_with = define('with')
    .named('abbreviations', T.any, null)
    .named('abbreviations-style', T.any, null)
    .named('abstract', T.any, null)
    .named('acknowledgement', T.any, null)
    .named('appendix', T.any, null)
    .named('bibl', T.any, null)
    .named('content-style', T.any, null)
    .named('kurzfassung', T.any, null)
    .named('preamble', T.any, null)
    .named('titlepage', T.any, null)
    .returns(T.any)
    .external(fullThesis)
  const WORK_TYPES_bachelorThesis = external('bachelor-thesis', WORK_TYPES)
  return doc(
    importPackage('@preview/easy-hgb-thesis:0.2.2', [LICENSE_TYPES, WORK_TYPES, copyrightPage, fullThesis, titlepage]),
    m.lines(
      set(document, {
        title: 'Thesis Title',
        author: ['Author Name', 'Name Two', 'Name Three'],
        description: 'Thesis Description',
        keywords: ['Keyword 1 ', 'Keyword 2'],
      }),
      set(text, { lang: 'en' }),
    ),
    m.lines(
      importFile('abbrev.typ', [abbr]),
      show(
        fullThesis_with({
          titlepage: codeBlock(
            [],
            titlepage({ workType: WORK_TYPES_bachelorThesis }, 'Computer Science', 'Dr. Max Mentorman'),
          ),
          acknowledgement: includeFile('chapters/acknowledgement.typ'),
          kurzfassung: includeFile('chapters/kurzfassung.typ'),
          abstract: includeFile('chapters/abstract.typ'),
          preamble: includeFile('chapters/preamble.typ'),
          appendix: includeFile('chapters/appendix.typ'),
          abbreviations: abbr,
          bibl: bibliography(path('bib.yaml')),
          contentStyle: (it) => codeBlock([show(where(table.cell, { y: 0 }), strong)], it),
          abbreviationsStyle: (it_2) =>
            codeBlock([set(table, { fill: unsafeRaw.code<any>`(x, y) => if y == 0 { gray }` })], it_2),
        }),
      ),
    ),
    m.lines(
      includeFile('chapters/introduction.typ'),
      includeFile('chapters/methodology.typ'),
      includeFile('chapters/conclusion.typ'),
    ),
  )
}
