// Converted from test/suite/corpus/math-underover-multiline-annotation-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`x = underbrace(
  "complexity",
  // The alignment points are not shared between body and annotation.
  underbrace(&1+2 \\ 3+&4, a b+&c \\ d+&e)
)`),
  )
}
