// Converted from test/suite/corpus/array-filter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, data, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([]).filter(calc.even), []),
      space,
      test(data([1, 2, 3, 4]).filter(calc.even), [2, 4]),
      space,
      test(data([7, 3, 2, 5, 1]).filter(unsafeRaw.code<any>`x => x < 5`), [3, 2, 1]),
    ),
  )
}
