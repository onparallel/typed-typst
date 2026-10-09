// Converted from test/suite/corpus/math-mat-delim-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(math.mat, { delim: '[' }),
      inline(unsafeRaw.math.block`mat(1, 2; 3, 4)`, space, unsafeRaw.math.block`a + mat(delim: #none, 1, 2; 3, 4) + b`),
    ),
  )
}
