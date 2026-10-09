// Converted from test/suite/corpus/issue-7843-date-duration-precision.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  datetime,
  define,
  doc,
  duration,
  inline,
  let_,
  m,
  minus,
  range,
  space,
  times,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [someDayDecl, someDay] = let_('some-day', datetime({ year: 2000, month: 6, day: 5 }))
  const [twoHoursDecl, twoHours] = let_('two-hours', duration({ hours: 2 }))
  return doc(
    inline(
      test(
        datetime({ year: 2030, month: 5, day: 25, hour: 6, minute: 30, second: 19 }),
        add(datetime({ year: 2030, month: 5, day: 25 }), duration({ hours: 6, minutes: 30, seconds: 19 })),
      ),
      space,
      test(
        datetime({ year: 2030, month: 5, day: 25 }),
        minus(datetime({ year: 2030, month: 5, day: 26 }), duration({ hours: 24 })),
      ),
    ),
    m.lines(
      someDayDecl,
      twoHoursDecl,
      inline(
        test(
          add(someDay, times(100, twoHours)),
          range(100).fold(someDay, (d, unused) => add(d, twoHours)),
        ),
        space,
        test(
          minus(someDay, times(100, twoHours)),
          range(100).fold(someDay, (d_2, unused_2) => minus(d_2, twoHours)),
        ),
      ),
    ),
  )
}
