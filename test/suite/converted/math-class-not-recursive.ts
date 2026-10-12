// Converted from test/suite/corpus/math-class-not-recursive.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`& log x \\
  & log (x+y) \\
  & log class("normal", (x+y))`),
  )
}
