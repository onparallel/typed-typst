// Converted from test/suite/corpus/color-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, cmyk, define, doc, inline, luma, pct, rgb, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(rgb(1, 2, 3, 4).space(), rgb),
      space,
      test(cmyk(pct(4), pct(5), pct(6), pct(7)).space(), cmyk),
      space,
      test(luma(40).space(), luma),
      space,
      test(unsafeRaw.code<any>`rgb(1, 2, 3, 4).space() != luma`, true),
    ),
  )
}
