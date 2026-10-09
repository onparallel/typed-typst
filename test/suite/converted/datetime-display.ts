// Converted from test/suite/corpus/datetime-display.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, auto, datetime, define, doc, duration, inline, let_, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dDecl, d] = let_('d', datetime({ year: 2023, month: 4, day: 29, hour: 14, minute: 26, second: 50 }))
  const [eDecl, e] = let_('e', datetime({ year: 2023, month: 4, day: 29 }))
  return doc(
    inline(
      test(datetime({ year: 2023, month: 4, day: 29 }).display(), '2023-04-29'),
      space,
      test(datetime({ year: 2023, month: 4, day: 29 }).display('[year]'), '2023'),
      space,
      test(datetime({ year: 2023, month: 4, day: 29 }).display('[year repr:last_two]'), '23'),
      space,
      test(
        datetime({ year: 2023, month: 4, day: 29 }).display('[year] [month repr:long] [day] [week_number] [weekday]'),
        '2023 April 29 17 Saturday',
      ),
    ),
    inline(
      test(datetime({ hour: 14, minute: 26, second: 50 }).display(), '14:26:50'),
      space,
      test(datetime({ hour: 14, minute: 26, second: 50 }).display('[hour]'), '14'),
      space,
      test(datetime({ hour: 14, minute: 26, second: 50 }).display('[hour repr:12 padding:none]'), '2'),
      space,
      test(datetime({ hour: 14, minute: 26, second: 50 }).display('[hour], [minute], [second]'), '14, 26, 50'),
    ),
    inline(
      test(
        datetime({ year: 2023, month: 4, day: 29, hour: 14, minute: 26, second: 50 }).display(),
        '2023-04-29 14:26:50',
      ),
    ),
    m.lines(
      dDecl,
      inline(
        test(d.year(), 2023),
        space,
        test(d.month(), 4),
        space,
        test(d.weekday(), 6),
        space,
        test(d.day(), 29),
        space,
        test(d.hour(), 14),
        space,
        test(d.minute(), 26),
        space,
        test(d.second(), 50),
      ),
    ),
    m.lines(eDecl, inline(test(e.hour(), null), space, test(e.minute(), null), space, test(e.second(), null))),
    inline(
      test(datetime.today().display(), '1970-01-01'),
      space,
      test(datetime.today({ offset: auto }).display(), '1970-01-01'),
      space,
      test(datetime.today({ offset: 2 }).display(), '1970-01-01'),
      space,
      test(datetime.today({ offset: 14 }).display(), '1970-01-02'),
      space,
      test(datetime.today({ offset: -14 }).display(), '1969-12-31'),
      space,
      test(datetime.today({ offset: duration({ hours: 5, minutes: 45 }) }).display(), '1970-01-01'),
    ),
  )
}
