// Converted from test/suite/corpus/math-call-non-func.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`phi(x)`, space, unsafeRaw.math.block`phi(x, y, 1/2)`))
}
