// Converted from test/suite/corpus/math-mat-spread.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`mat(..#range(1, 5).chunks(2))
  mat(#(..range(2).map(_ => range(2))))`),
    m.lines(
      let_('nums', unsafeRaw.code<any>`((1,) * 5).intersperse(0).chunks(3)`)[0],
      inline(unsafeRaw.math.block`mat(..nums, delim: "[")`),
    ),
  )
}
