// Converted from test/suite/corpus/math-underover-parens.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`overparen(
  underparen(x + y, "long comment"),
  1 + 2 + ... + 5
)`),
  )
}
