// Converted from test/suite/corpus/block-above-below-context.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, auto, block, context, define, doc, inline, pt, set, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      context((ctx) => test(unsafeRaw.code<any>`block.above`, auto)),
      space,
      set(block, { spacing: pt(20) }),
      space,
      context((ctx_2) => test(unsafeRaw.code<any>`block.above`, pt(20))),
      space,
      context((ctx_3) => test(unsafeRaw.code<any>`block.below`, pt(20))),
    ),
  )
}
