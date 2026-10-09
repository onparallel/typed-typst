// Converted from test/suite/corpus/color-luma-ops.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, luma, pct, space } from '../../../src/index.ts'

export default () => {
  const testRepr = define('test-repr').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      testRepr(luma(pct(20)).lighten(pct(50)), luma(pct(60))),
      space,
      testRepr(luma(pct(80)).darken(pct(20)), luma(pct(64))),
      space,
      testRepr(luma(pct(80)).negate({ space: luma }), luma(pct(20))),
    ),
  )
}
