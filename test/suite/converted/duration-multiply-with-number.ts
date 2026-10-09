// Converted from test/suite/corpus/duration-multiply-with-number.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, div, doc, duration, inline, space, times } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(times(duration({ minutes: 10 }), 6), duration({ hours: 1 })),
      space,
      test(times(duration({ minutes: 10 }), 2), duration({ minutes: 20 })),
      space,
      test(times(duration({ minutes: 10 }), 2.5), duration({ minutes: 25 })),
      space,
      test(div(duration({ minutes: 10 }), 2), duration({ minutes: 5 })),
      space,
      test(div(duration({ minutes: 10 }), 2.5), duration({ minutes: 4 })),
    ),
  )
}
