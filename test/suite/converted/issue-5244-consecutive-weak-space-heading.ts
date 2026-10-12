// Converted from test/suite/corpus/issue-5244-consecutive-weak-space-heading.typ by scripts/convert-suite.ts — do not edit.
import { doc, em, h, heading, inline, m, par, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(par, { justify: true }), set(heading, { numbering: 'I.' })),
    heading({ depth: 1 }, inline(h({ weak: true }, em(0.3)), ' ', 'test')),
  )
}
