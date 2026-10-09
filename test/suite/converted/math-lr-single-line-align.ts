// Converted from test/suite/corpus/math-lr-single-line-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`& x \\
    & x )`,
      space,
      unsafeRaw.math.block`& x \\
  ( & x )`,
      space,
      unsafeRaw.math.block`& x \\
  ( & x`,
    ),
  )
}
