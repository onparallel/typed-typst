// Converted from test/suite/corpus/issue-4829-math-pagebreaking-wrong-number.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, em, inline, m, math, page, rect, set, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(5) }),
      set(math.equation, { numbering: '1' }),
      show(math.equation, set(block, { breakable: true })),
    ),
    inline(rect({ height: em(1.5) })),
    inline(unsafeRaw.math.block`a + b \\
  a + b`),
  )
}
