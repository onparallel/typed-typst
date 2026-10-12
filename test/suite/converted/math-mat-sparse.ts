// Converted from test/suite/corpus/math-mat-sparse.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`mat(
  1, 2, ..., 10;
  2, 2, ..., 10;
  dots.v, dots.v, dots.down, dots.v;
  10, 10, ..., 10;
)`),
  )
}
