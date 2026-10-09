// Converted from test/suite/corpus/math-mat-augment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, pt, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2, gutter: pt(10) },
        unsafeRaw.math.block`mat(10, 2, 3, 4; 5, 6, 7, 8; augment: #3)`,
        unsafeRaw.math.block`mat(10, 2, 3, 4; 5, 6, 7, 8; augment: #4)`,
        unsafeRaw.math.block`mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(hline: 0))`,
        unsafeRaw.math.block`mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(hline: 2))`,
        unsafeRaw.math.block`mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(hline: 3))`,
        unsafeRaw.math.block`mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(hline: 1, vline: 1))`,
        unsafeRaw.math.block`mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(hline: -1, vline: -1))`,
        unsafeRaw.math.block`mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(vline: 2, stroke: 1pt + blue))`,
        unsafeRaw.math.block`mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(vline: 3, stroke: 1pt + blue))`,
        unsafeRaw.math.block`mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(vline: 3, stroke: 1pt + blue))`,
        unsafeRaw.math.block`mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(vline: 0, stroke: 1pt + blue))`,
        unsafeRaw.math.block`mat(10, 2, 3, 4; 5, 6, 7, 8; augment: #(vline: -4, stroke: 1pt + blue))`,
      ),
    ),
  )
}
