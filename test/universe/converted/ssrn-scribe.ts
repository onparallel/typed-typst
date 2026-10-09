// Converted from test/universe/corpus/ssrn-scribe.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, m, show } from '../../../src/index.ts'

export default () => {
  const paper = external('paper')
  const paper_with = define('with')
    .named('layout', T.any, null)
    .named('meta', T.any, null)
    .named('theme', T.any, null)
    .returns(T.any)
    .external(paper)
  return doc(
    importPackage('@preview/ssrn-scribe:0.10.1', [paper]),
    show(
      paper_with({
        meta: {
          title: inline`Your Paper Title`,
          authors: [{ name: 'Your Name', affiliation: 'Your Institution', email: 'you@example.edu' }],
          abstract: inline`Briefly state the question, method, main result, and contribution.`,
          keywords: inline`Keyword one, Keyword two, Keyword three`,
        },
        theme: { font: ['Times New Roman', 'Libertinus Serif'], headingFont: ['Times New Roman', 'Libertinus Serif'] },
        layout: { maketitle: true, density: 'balanced' },
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), 'Introduce the research question and explain why it matters.'),
    m.lines(m.heading(1, 'Method'), 'Describe the data, design, and analysis.'),
    m.lines(m.heading(1, 'Results'), 'Report the main findings.'),
    m.lines(m.heading(1, 'Conclusion'), 'Summarize the contribution and its limitations.'),
  )
}
