// Converted from test/suite/corpus/math-mat-gaps.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, math, set, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(math.mat, { rowGap: em(1), columnGap: em(2) }),
      inline(
        unsafeRaw.math.block`mat(1, 2; 3, 4)`,
        space,
        unsafeRaw.math.block`mat(column-gap: #1em, 1, 2; 3, 4)
  mat(row-gap: #2em, 1, 2; 3, 4)`,
      ),
    ),
  )
}
