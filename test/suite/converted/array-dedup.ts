// Converted from test/suite/corpus/array-dedup.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([]).dedup(), []),
      space,
      test(data([1]).dedup(), [1]),
      space,
      test(data([1, 1]).dedup(), [1]),
      space,
      test(data([1, 2, 1]).dedup(), [1, 2]),
      space,
      test(data(['Jane', 'John', 'Eric']).dedup(), ['Jane', 'John', 'Eric']),
      space,
      test(data(['Jane', 'John', 'Eric', 'John']).dedup(), ['Jane', 'John', 'Eric']),
    ),
  )
}
