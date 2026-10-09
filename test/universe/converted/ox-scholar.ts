// Converted from test/universe/corpus/ox-scholar.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  cm,
  define,
  doc,
  external,
  image,
  importPackage,
  includeFile,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const thesis_with = define('with')
    .named('abstract', T.any, null)
    .named('acknowledgements', T.any, null)
    .named('author', T.any, null)
    .named('bib', T.any, null)
    .named('college', T.any, null)
    .named('degree', T.any, null)
    .named('logo', T.any, null)
    .named('show-toc', T.any, null)
    .named('submission-term', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/ox-scholar:0.2.0', [thesis]),
    show(
      thesis_with({
        title: 'Thesis Title',
        author: 'Author',
        college: 'College',
        degree: 'Doctor of Philosophy',
        submissionTerm: 'Submission Term, Year',
        acknowledgements: includeFile('content/acknowledgements.typ'),
        abstract: includeFile('content/abstract.typ'),
        logo: image({ width: cm(4.5) }, path('assets/beltcrest.png')),
        showToc: true,
        bib: bibliography({ title: 'References' }, path('content/bibliography.bib')),
      }),
    ),
    includeFile('content/section01.typ'),
  )
}
