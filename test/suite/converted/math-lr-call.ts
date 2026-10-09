// Converted from test/suite/corpus/math-lr-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`[|a/b|] != lr(|]a/b|]) != [a/b)`, space, unsafeRaw.math.block`lr(| ]1,2\\[ + 1/2|)`),
  )
}
