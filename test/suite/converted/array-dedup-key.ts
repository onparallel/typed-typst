// Converted from test/suite/corpus/array-dedup-key.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, data, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([1, 2, 3, 4, 5, 6]).dedup({ key: (x) => calc.rem(x, 2) }), [1, 2]),
      space,
      test(data([1, 2, 3, 4, 5, 6]).dedup({ key: (x_2) => calc.rem(x_2, 3) }), [1, 2, 3]),
      space,
      test(data(['Hello', 'World', 'Hi', 'There']).dedup({ key: unsafeRaw.code<any>`x => x.len()` }), ['Hello', 'Hi']),
      space,
      test(data(['Hello', 'World', 'Hi', 'There']).dedup({ key: unsafeRaw.code<any>`x => x.at(0)` }), [
        'Hello',
        'World',
        'There',
      ]),
    ),
  )
}
