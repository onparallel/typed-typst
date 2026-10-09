// Converted from test/suite/corpus/math-align-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, em, grid, inline, m, page, pt, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      inline(
        grid(
          { columns: 2, stroke: pt(1), inset: em(1) },
          unsafeRaw.math.block`a & + b + & c \\
    a & + b   &   & e & + d \\
    a & + b + & c & e & + d \\
      &       & c &   & + d \\
      & = 0`,
          unsafeRaw.math.block`a & + b + & c \\
    a & + b   &   & e & + d \\
    a & + b + & c &   & + d \\
      &       & c & e & + d \\
      & = 0`,
          unsafeRaw.math.block`a & + b + & c \\
    a & + b   &   &   & + d \\
    a & + b + & c & e & + d \\
      &       & c & e & + d \\
      & = 0`,
          unsafeRaw.math.block`a & + b + & c \\
    a & + b   &   & e & + d \\
    a & + b + & c & e & + d \\
      &       & c & e & + d \\
      & = 0`,
        ),
      ),
    ),
  )
}
