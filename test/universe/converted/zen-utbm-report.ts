// Converted from test/universe/corpus/zen-utbm-report.typ by scripts/convert-suite.ts — do not edit.
import { T, define, doc, heading, importPackage, inline, m, show } from '../../../src/index.ts'

export default () => {
  const report = define('report')
    .pos('arg1', T.any)
    .named('course-name', T.any, null)
    .named('doc-author', T.any, null)
    .named('doc-title', T.content, [])
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/zen-utbm-report:0.1.0', [report]),
    show((doc_2, ctx) =>
      report(
        { docTitle: inline`My First UTBM Report`, docAuthor: ['Alice Martin', 'Bob Dupont'], courseName: 'IF2' },
        doc_2,
      ),
    ),
    heading({ depth: 1 }, inline('Introduction')),
    'This template helps you meet UTBM conventions with minimal setup.',
    m.lines(
      heading({ depth: 2 }, inline('Motivation')),
      'State the problem you are solving and the expected outcomes.',
    ),
    heading({ depth: 1 }, inline('Methods')),
    'Explain your approach, assumptions, and tools.',
    m.lines(heading({ depth: 2 }, inline('Algorithm')), 'Present your algorithm and its complexity.'),
    heading({ depth: 1 }, inline('Results')),
    'Summarize the key findings, tables, or figures.',
    heading({ depth: 1 }, inline('Conclusion')),
    'Wrap up with lessons learned and potential improvements.',
  )
}
