// Converted from test/suite/corpus/issue-5244-consecutive-weak-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, em, h, inline, m, par, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(par, { linebreaks: 'optimized' }),
      inline(codeBlock([inline`A`, h({ weak: true }, em(0.3)), h({ weak: true }, em(0.3)), inline`B`])),
    ),
  )
}
