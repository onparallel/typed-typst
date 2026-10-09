// Converted from test/suite/corpus/color-transparentize.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, luma, pct, space } from '../../../src/index.ts'

export default () => {
  const testRepr = define('test-repr').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      testRepr(luma(pct(100), pct(100)).transparentize(pct(50)), luma(pct(100), pct(50))),
      space,
      testRepr(luma(pct(100), pct(100)).transparentize(pct(75)), luma(pct(100), pct(25))),
      space,
      testRepr(luma(pct(100), pct(50)).transparentize(pct(50)), luma(pct(100), pct(25))),
      space,
      testRepr(luma(pct(100), pct(10)).transparentize(pct(250)), luma(pct(100), pct(0))),
      space,
      testRepr(luma(pct(100), pct(40)).transparentize(pct(-50)), luma(pct(100), pct(70))),
      space,
      testRepr(luma(pct(100), pct(0)).transparentize(pct(-100)), luma(pct(100), pct(100))),
    ),
  )
}
