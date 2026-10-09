// Converted from test/suite/corpus/issue-5244-consecutive-weak-space-heading.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, h, heading, m, par, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(par, { justify: true }), set(heading, { numbering: 'I.' })),
    m.heading(1, h({ weak: true }, em(0.3)), ' ', 'test'),
  )
}
