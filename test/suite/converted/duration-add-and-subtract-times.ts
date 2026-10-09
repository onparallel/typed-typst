// Converted from test/suite/corpus/duration-add-and-subtract-times.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, datetime, define, doc, duration, inline, let_, m, minus, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [aDecl, a] = let_('a', datetime({ hour: 12, minute: 0, second: 0 }))
  return doc(
    m.lines(
      aDecl,
      inline(
        test(add(a, duration({ hours: 1, minutes: -60 })), datetime({ hour: 12, minute: 0, second: 0 })),
        space,
        test(add(a, duration({ hours: 2 })), datetime({ hour: 14, minute: 0, second: 0 })),
        space,
        test(add(a, duration({ minutes: 10 })), datetime({ hour: 12, minute: 10, second: 0 })),
        space,
        test(add(a, duration({ seconds: 30 })), datetime({ hour: 12, minute: 0, second: 30 })),
        space,
        test(add(a, duration({ hours: -2 })), datetime({ hour: 10, minute: 0, second: 0 })),
        space,
        test(minus(a, duration({ hours: 2 })), datetime({ hour: 10, minute: 0, second: 0 })),
        space,
        test(add(a, duration({ minutes: -10 })), datetime({ hour: 11, minute: 50, second: 0 })),
        space,
        test(minus(a, duration({ minutes: 10 })), datetime({ hour: 11, minute: 50, second: 0 })),
        space,
        test(add(a, duration({ seconds: -30 })), datetime({ hour: 11, minute: 59, second: 30 })),
        space,
        test(minus(a, duration({ seconds: 30 })), datetime({ hour: 11, minute: 59, second: 30 })),
        space,
        test(add(a, duration({ hours: 1, minutes: 13, seconds: 13 })), datetime({ hour: 13, minute: 13, second: 13 })),
      ),
    ),
  )
}
