// Converted from test/suite/corpus/relative-fields.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, define, doc, em, inline, pct, pt, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`(100% + 2em + 2pt).ratio`, pct(100)),
      space,
      test(unsafeRaw.code<any>`(100% + 2em + 2pt).length`, add(em(2), pt(2))),
      space,
      test(unsafeRaw.code<any>`(100% + 2pt).length`, pt(2)),
      space,
      test(unsafeRaw.code<any>`(100% + 2pt - 2pt).length`, pt(0)),
      space,
      test(unsafeRaw.code<any>`(56% + 2pt - 56%).ratio`, pct(0)),
    ),
  )
}
