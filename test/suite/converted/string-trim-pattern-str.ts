// Converted from test/suite/corpus/string-trim-pattern-str.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, end, inline, space, start } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data('aabcaa').trim({ repeat: false }, 'a'), 'abca'),
      space,
      test(data('aabca').trim({ at: start }, 'a'), 'bca'),
      space,
      test(data('aabcaa').trim({ at: end, repeat: false }, 'a'), 'aabca'),
      space,
      test(data(' abc\n').trim('\n'), ' abc'),
      space,
      test(data('whole').trim({ at: start }, 'whole'), ''),
    ),
  )
}
