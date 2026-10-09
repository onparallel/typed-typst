// Converted from test/suite/corpus/math-mat-spread-2d.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, inline, let_, m, range, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [numsDecl, nums] = let_(
    'nums',
    range(0, 2).map((i) => [i, add(i, 1)]),
  )
  return doc(
    m.lines(
      numsDecl,
      inline(
        unsafeRaw.math.block`mat(..nums, delim: "|",)
  mat(..nums; delim: "|",)`,
        space,
        unsafeRaw.math.block`mat(..nums) mat(..nums;) \\
  mat(..nums;,) mat(..nums,)`,
      ),
    ),
  )
}
