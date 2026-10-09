// Converted from test/suite/corpus/math-underover-brace.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`x = underbrace(
  1 + 2 + ... + 5,
  underbrace("numbers", x + y)
)`),
  )
}
