// Converted from test/suite/corpus/math-frac-styles-inline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(math.frac, { style: 'horizontal' }),
      inline(unsafeRaw.math`a/(b+c), frac(a, b+c, style: "skewed"), frac(a, b+c, style: "vertical")`),
    ),
  )
}
