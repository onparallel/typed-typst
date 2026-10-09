// Converted from test/suite/corpus/duration-from-date-subtraction.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, duration, inline, let_, m, minus, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [aDecl, a] = let_('a', datetime({ hour: 12, minute: 0, second: 0 }))
  const [bDecl, b] = let_('b', datetime({ day: 1, month: 1, year: 2000 }))
  return doc(
    m.lines(
      aDecl,
      bDecl,
      inline(
        test(minus(datetime({ hour: 14, minute: 0, second: 0 }), a), duration({ hours: 2 })),
        space,
        test(minus(datetime({ hour: 14, minute: 0, second: 0 }), a), duration({ minutes: 120 })),
        space,
        test(minus(datetime({ hour: 13, minute: 0, second: 0 }), a), duration({ seconds: 3600 })),
        space,
        test(minus(datetime({ day: 1, month: 2, year: 2000 }), b), duration({ days: 31 })),
        space,
        test(minus(datetime({ day: 15, month: 1, year: 2000 }), b), duration({ weeks: 2 })),
      ),
    ),
  )
}
