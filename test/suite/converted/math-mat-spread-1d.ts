// Converted from test/suite/corpus/math-mat-spread-1d.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`mat(..#range(1, 5) ; 1, ..#range(2, 5))
  mat(..#range(1, 3), ..#range(3, 5) ; ..#range(1, 4), 4)`),
  )
}
