// Converted from test/suite/corpus/duration-divide.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, div, doc, duration, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(div(duration({ minutes: 20 }), duration({ hours: 1 })), div(1, 3)),
      space,
      test(div(duration({ minutes: 20 }), duration({ minutes: 10 })), 2),
      space,
      test(div(duration({ minutes: 20 }), duration({ minutes: 8 })), 2.5),
    ),
  )
}
