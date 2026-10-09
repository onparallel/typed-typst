// Converted from test/suite/corpus/locate-position-trailing-tag.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, box, context, define, doc, inline, pt, space, unsafeRaw, v } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      context((ctx) => test(unsafeRaw.code<any>`here().position().y`, pt(10))),
      space,
      box(inline()),
      space,
      v(pt(10)),
      space,
      context((ctx_2) => test(unsafeRaw.code<any>`here().position().y`, pt(20))),
    ),
  )
}
