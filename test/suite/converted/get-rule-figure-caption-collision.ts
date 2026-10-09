// Converted from test/suite/corpus/get-rule-figure-caption-collision.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, figure, function_, inline, space, type } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(type(figure.caption), function_),
      space,
      context((ctx) => test(type(figure.caption), function_)),
    ),
  )
}
