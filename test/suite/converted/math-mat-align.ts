// Converted from test/suite/corpus/math-mat-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`mat(-1, 1, 1; 1, -1, 1; 1, 1, -1; align: #left)`,
      space,
      unsafeRaw.math.block`mat(-1, 1, 1; 1, -1, 1; 1, 1, -1; align: #center)`,
      space,
      unsafeRaw.math.block`mat(-1, 1, 1; 1, -1, 1; 1, 1, -1; align: #right)`,
    ),
  )
}
