// Converted from test/suite/corpus/math-align-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`x &= x + y \\
    &= x + 2z \\
    &= sum x dot 2z`),
  )
}
