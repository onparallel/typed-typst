// Converted from test/suite/corpus/dict-filter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, data, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data({}).filter(calc.even), data({})),
      space,
      test(data({ a: 0, b: 1, c: 2 }).filter(unsafeRaw.code<any>`v => v != 0`), { b: 1, c: 2 }),
      space,
      test(data({ a: 0, b: 1, c: 2 }).filter(calc.even), { a: 0, c: 2 }),
    ),
  )
}
