// Converted from test/universe/corpus/econ-working-paper.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  em,
  external,
  importPackage,
  inline,
  m,
  path,
  pt,
  show,
  sym,
} from '../../../src/index.ts'

export default () => {
  const paper = external('paper')
  const note = external('note')
  const paper_with = define('with')
    .named('abstract', T.content, [])
    .named('acknowledgments', T.content, [])
    .named('anonymize', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('citation-style', T.any, null)
    .named('date', T.any, null)
    .named('draft', T.any, null)
    .named('endfloat', T.any, null)
    .named('endfloat-position', T.any, null)
    .named('font', T.any, null)
    .named('fontsize', T.any, null)
    .named('keywords', T.content, [])
    .named('line-spacing', T.any, null)
    .named('math-fontsize', T.any, null)
    .named('paper', T.any, null)
    .named('status', T.any, null)
    .named('table-fontsize', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(paper)
  return doc(
    importPackage('@preview/econ-working-paper:0.6.0', [paper, note]),
    show(
      paper_with({
        title: 'Your Paper Title',
        status: null,
        authors: [
          { name: 'Author One', affiliation: 'University A', email: 'one@a.edu', note: 'ORCID: 0000-0001-2345-6789' },
          { name: 'Author Two', affiliation: 'University B' },
        ],
        date: '2026-01-01',
        abstract: inline`Your abstract here.`,
        keywords: inline`keyword one, keyword two`,
        acknowledgments: inline`We thank ...`,
        bibliography: bibliography({ title: 'References' }, path('refs.bib')),
        citationStyle: 'chicago-author-date',
        font: ['Linux Libertine', 'Times New Roman', 'New Computer Modern'],
        fontsize: pt(12),
        tableFontsize: pt(10),
        mathFontsize: em(1),
        paper: 'us-letter',
        anonymize: false,
        draft: false,
        endfloat: false,
        endfloatPosition: 'end',
        lineSpacing: 'double',
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), 'Your text here.'),
  )
}
