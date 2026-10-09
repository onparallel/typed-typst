// Converted from test/universe/corpus/ntust-thesis-unofficial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importFile,
  importPackage,
  includeFile,
  let_,
  m,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const ntustThesis = external('ntust-thesis')
  const thesisInfo = external('thesis-info')
  const ntustThesis_with = define('with')
    .named('abstracts', T.any, null)
    .named('acknowledgement', T.any, null)
    .named('appendix', T.any, null)
    .named('info', T.any, null)
    .named('lang', T.any, null)
    .named('references', T.any, null)
    .returns(T.any)
    .external(ntustThesis)
  const [languageDecl, language] = let_('language', 'zh')
  return doc(
    m.lines(
      importPackage('@preview/ntust-thesis-unofficial:1.3.0', [ntustThesis]),
      importFile('frontpages/names.typ', [thesisInfo]),
    ),
    languageDecl,
    show(
      ntustThesis_with({
        lang: language,
        info: thesisInfo,
        abstracts: { zh: includeFile('frontpages/abstract.zh.typ'), en: includeFile('frontpages/abstract.en.typ') },
        acknowledgement: includeFile('frontpages/ackn.typ'),
        references: bibliography(path('cite.bib')),
        appendix: includeFile('frontpages/appendix.typ'),
      }),
    ),
    m.lines(
      includeFile('sections/ch1-intro.typ'),
      includeFile('sections/ch2-related-work.typ'),
      includeFile('sections/ch3-method.typ'),
      includeFile('sections/ch4-experiment.typ'),
      includeFile('sections/conclusion.typ'),
    ),
  )
}
