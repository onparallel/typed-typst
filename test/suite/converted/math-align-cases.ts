// Converted from test/suite/corpus/math-align-cases.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`f := cases(
  1 + 2 &"iff" &x,
  3     &"if"  &y,
)`),
  )
}
