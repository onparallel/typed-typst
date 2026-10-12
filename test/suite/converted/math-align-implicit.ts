// Converted from test/suite/corpus/math-align-implicit.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`"right" \\
"a very long line" \\
"left" \\`),
  )
}
