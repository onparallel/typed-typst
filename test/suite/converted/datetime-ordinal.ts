// Converted from test/suite/corpus/datetime-ordinal.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, datetime, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(datetime({ day: 1, month: 1, year: 2000 }).ordinal(), 1),
      space,
      test(datetime({ day: 1, month: 3, year: 2000 }).ordinal(), add(add(31, 29), 1)),
      space,
      test(datetime({ day: 31, month: 12, year: 2000 }).ordinal(), 366),
      space,
      test(datetime({ day: 1, month: 3, year: 2001 }).ordinal(), add(add(31, 28), 1)),
      space,
      test(datetime({ day: 31, month: 12, year: 2001 }).ordinal(), 365),
    ),
  )
}
