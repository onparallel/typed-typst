// Converted from test/suite/corpus/math-mat-delim-direct.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, center, doc, grid, inline, m, pt, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(align, { alignment: center }),
      inline(
        grid(
          { columns: 3, gutter: pt(10) },
          unsafeRaw.math.block`mat(1, 2, delim: "[")`,
          unsafeRaw.math.block`mat(1, 2; delim: "[")`,
          unsafeRaw.math.block`mat(delim: "[", 1, 2)`,
          unsafeRaw.math.block`mat(1; 2; delim: "[")`,
          unsafeRaw.math.block`mat(1; delim: "[", 2)`,
          unsafeRaw.math.block`mat(delim: "[", 1; 2)`,
          unsafeRaw.math.block`mat(1, 2; delim: "[", 3, 4)`,
          unsafeRaw.math.block`mat(delim: "[", 1, 2; 3, 4)`,
          unsafeRaw.math.block`mat(1, 2; 3, 4; delim: "[")`,
        ),
      ),
    ),
  )
}
