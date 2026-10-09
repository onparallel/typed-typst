// Converted from test/suite/corpus/array-position.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data(['Hi', '❤️', 'Love']).position(unsafeRaw.code<any>`s => s == "❤️"`), 1),
      space,
      test(data(['Bye', '💘', 'Apart']).position(unsafeRaw.code<any>`s => s == "❤️"`), null),
      space,
      test(data(['A', 'B', 'CDEF', 'G']).position(unsafeRaw.code<any>`v => v.len() > 2`), 2),
    ),
  )
}
