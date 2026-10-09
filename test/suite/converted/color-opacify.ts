// Converted from test/suite/corpus/color-opacify.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, luma, pct, space } from '../../../src/index.ts'

export default () => {
  const testRepr = define('test-repr').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      testRepr(luma(pct(100), pct(50)).opacify(pct(50)), luma(pct(100), pct(75))),
      space,
      testRepr(luma(pct(100), pct(20)).opacify(pct(100)), luma(pct(100), pct(100))),
      space,
      testRepr(luma(pct(100), pct(100)).opacify(pct(250)), luma(pct(100), pct(100))),
      space,
      testRepr(luma(pct(100), pct(50)).opacify(pct(-50)), luma(pct(100), pct(25))),
      space,
      testRepr(luma(pct(100), pct(0)).opacify(pct(0)), luma(pct(100), pct(0))),
    ),
  )
}
