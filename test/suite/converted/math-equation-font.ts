// Converted from test/suite/corpus/math-equation-font.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { font: 'Noto Sans Math' })),
      inline(unsafeRaw.math.block`v := vec(1 + 2, 2 - 4, sqrt(3), arrow(x)) + 1`),
    ),
  )
}
