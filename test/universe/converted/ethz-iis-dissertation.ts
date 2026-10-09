// Converted from test/universe/corpus/ethz-iis-dissertation.typ by scripts/convert-suite.ts — do not edit.
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
  m,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const dissertation = external('dissertation')
  const acr = external('acr')
  const acrfull = external('acrfull')
  const acrpl = external('acrpl')
  const typstGuide = external('typst-guide')
  const acronyms = external('acronyms')
  const dissertation_with = define('with')
    .named('abstracts', T.any, null)
    .named('acknowledgements', T.any, null)
    .named('acronyms', T.any, null)
    .named('appendices', T.any, null)
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('co-examiners', T.any, null)
    .named('cv', T.any, null)
    .named('date-of-birth', T.any, null)
    .named('email', T.any, null)
    .named('mode', T.any, null)
    .named('show-copyright-notice', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(dissertation)
  return doc(
    m.lines(
      importPackage('@preview/ethz-iis-dissertation:1.0.0', [dissertation, acr, acrfull, acrpl, typstGuide]),
      importFile('acronyms.typ', [acronyms]),
    ),
    show(
      dissertation_with({
        title: 'Title of Your Dissertation',
        author: 'Firstname Lastname',
        email: 'username@iis.ee.ethz.ch',
        dateOfBirth: 'dd.mm.yyyy',
        supervisor: 'Prof. Dr. Supervisor Name',
        coExaminers: ['Prof. Dr. Co-Examiner Name'],
        year: 2026,
        mode: 'official',
        acknowledgements: includeFile('chapters/acknowledgements.typ'),
        abstracts: [includeFile('chapters/abstract_en.typ'), includeFile('chapters/abstract_de.typ')],
        acronyms: acronyms,
        bibliography: bibliography({ style: 'ieee' }, path('references.bib')),
        appendices: [includeFile('appendices/chip_gallery.typ'), typstGuide],
        cv: includeFile('cv.typ'),
        showCopyrightNotice: true,
      }),
    ),
    m.lines(
      includeFile('chapters/introduction.typ'),
      includeFile('chapters/background.typ'),
      includeFile('chapters/conclusion.typ'),
    ),
  )
}
