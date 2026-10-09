// Converted from test/suite/corpus/duration-add-and-subtract-dates.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, datetime, define, doc, duration, inline, let_, m, minus, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dDecl, d] = let_('d', datetime({ day: 1, month: 1, year: 2000 }))
  const [d2Decl, d2] = let_('d2', datetime({ day: 1, month: 2, year: 2000 }))
  return doc(
    m.lines(
      dDecl,
      d2Decl,
      inline(
        test(add(d, duration({ weeks: 2 })), datetime({ day: 15, month: 1, year: 2000 })),
        space,
        test(add(d, duration({ days: 3 })), datetime({ day: 4, month: 1, year: 2000 })),
        space,
        test(add(d, duration({ weeks: 1, days: 3 })), datetime({ day: 11, month: 1, year: 2000 })),
        space,
        test(add(d2, duration({ days: -1 })), datetime({ day: 31, month: 1, year: 2000 })),
        space,
        test(add(d2, duration({ days: -3 })), datetime({ day: 29, month: 1, year: 2000 })),
        space,
        test(add(d2, duration({ weeks: -1 })), datetime({ day: 25, month: 1, year: 2000 })),
        space,
        test(add(d, duration({ days: -1 })), datetime({ day: 31, month: 12, year: 1999 })),
        space,
        test(add(d, duration({ weeks: 1, days: -7 })), datetime({ day: 1, month: 1, year: 2000 })),
        space,
        test(minus(d2, duration({ days: 1 })), datetime({ day: 31, month: 1, year: 2000 })),
        space,
        test(minus(d2, duration({ days: 3 })), datetime({ day: 29, month: 1, year: 2000 })),
        space,
        test(minus(d2, duration({ weeks: 1 })), datetime({ day: 25, month: 1, year: 2000 })),
        space,
        test(minus(d, duration({ days: 1 })), datetime({ day: 31, month: 12, year: 1999 })),
        space,
        test(add(datetime({ day: 31, month: 1, year: 2000 }), duration({ days: 1 })), d2),
        space,
        test(
          add(datetime({ day: 31, month: 12, year: 2000 }), duration({ days: 1 })),
          datetime({ day: 1, month: 1, year: 2001 }),
        ),
      ),
    ),
  )
}
