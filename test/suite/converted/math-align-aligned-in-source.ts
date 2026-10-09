// Converted from test/suite/corpus/math-align-aligned-in-source.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`a + b &= 2 + 3 &= 5 \\
      b &= c     &= 3`),
  )
}
