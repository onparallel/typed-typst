// Converted from test/suite/corpus/math-cancel-cross.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`a + cancel(b + c + d, cross: #true, stroke: #red) + e`,
      space,
      unsafeRaw.math.block`a + cancel(b + c + d, cross: #true) + e`,
    ),
  )
}
