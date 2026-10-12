// Converted from test/suite/corpus/math-lr-half.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`lr(a/b\\]) = a = lr(\\{a/b)`))
}
