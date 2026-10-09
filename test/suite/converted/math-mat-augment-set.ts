// Converted from test/suite/corpus/math-mat-augment-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, green, inline, m, math, pt, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(math.mat, { augment: { hline: 2, vline: 1, stroke: add(pt(2), green) } }),
      inline(unsafeRaw.math.block`mat(1, 0, 0, 0; 0, 1, 0, 0; 0, 0, 1, 1)`),
    ),
    m.lines(set(math.mat, { augment: 2 }), inline(unsafeRaw.math.block`mat(1, 0, 0, 0; 0, 1, 0, 0; 0, 0, 1, 1)`)),
    set(math.mat, { augment: null }),
  )
}
