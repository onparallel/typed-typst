// Converted from test/suite/corpus/math-lr-symbol-unmatched.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`bracket.l a/b bracket.r
  = lr(bracket.l a/b bracket.r)`),
  )
}
