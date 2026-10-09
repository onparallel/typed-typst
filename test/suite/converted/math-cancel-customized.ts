// Converted from test/suite/corpus/math-cancel-customized.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, page, pt, set, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(200), height: auto }),
      inline(
        unsafeRaw.math`a + cancel(x, length: #200%) - cancel(x, length: #50%, stroke: #(red + 1.1pt))`,
        space,
        unsafeRaw.math.block`b + cancel(x, length: #150%) - cancel(a + b + c, length: #50%, stroke: #(blue + 1.2pt))`,
      ),
    ),
  )
}
