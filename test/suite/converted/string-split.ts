// Converted from test/suite/corpus/string-split.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, regex, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data('abc').split(''), ['', 'a', 'b', 'c', '']),
      space,
      test(data('abc').split('b'), ['a', 'c']),
      space,
      test(data('a123c').split(regex('\\d')), ['a', '', '', 'c']),
      space,
      test(data('a123c').split(regex('\\d+')), ['a', 'c']),
    ),
  )
}
