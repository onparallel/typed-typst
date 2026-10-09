// Converted from test/suite/corpus/duration-add-and-subtract-datetimes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, datetime, define, doc, duration, inline, minus, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(
        add(
          datetime({ day: 1, month: 1, year: 2000, hour: 12, minute: 0, second: 0 }),
          duration({ weeks: 1, days: 3, hours: -13, minutes: 10, seconds: -10 }),
        ),
        datetime({ day: 10, month: 1, year: 2000, hour: 23, minute: 9, second: 50 }),
      ),
      space,
      test(
        minus(
          add(
            datetime({ day: 1, month: 1, year: 2000, hour: 12, minute: 0, second: 0 }),
            duration({ weeks: 1, days: 3, minutes: 10 }),
          ),
          duration({ hours: 13, seconds: 10 }),
        ),
        datetime({ day: 10, month: 1, year: 2000, hour: 23, minute: 9, second: 50 }),
      ),
    ),
  )
}
