// Converted from test/suite/corpus/math-mat-spread.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`mat(..#range(1, 5).chunks(2))
  mat(#(..range(2).map(_ => range(2))))`),
    m.lines(
      unsafeRaw.markup`#let nums = ((1,) * 5).intersperse(0).chunks(3)`,
      inline(unsafeRaw.math.block`mat(..nums, delim: "[")`),
    ),
  )
}
