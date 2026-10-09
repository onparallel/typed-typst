// Converted from test/suite/corpus/duration-add-and-subtract.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, define, doc, duration, inline, minus, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(duration({ weeks: 1, hours: 1 }), add(duration({ weeks: 1 }), duration({ hours: 1 }))),
      space,
      test(duration({ weeks: 1, hours: -1 }), minus(duration({ weeks: 1 }), duration({ hours: 1 }))),
      space,
      test(duration({ days: 6, hours: 23 }), minus(duration({ weeks: 1 }), duration({ hours: 1 }))),
    ),
  )
}
