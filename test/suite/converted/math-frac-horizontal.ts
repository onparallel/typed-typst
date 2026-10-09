// Converted from test/suite/corpus/math-frac-horizontal.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(math.frac, { style: 'horizontal' }),
      inline(
        unsafeRaw.math.block`(a / b) / (c / (d / e))`,
        space,
        unsafeRaw.math.block`(a slash b) slash (c slash (d slash e))`,
      ),
    ),
  )
}
