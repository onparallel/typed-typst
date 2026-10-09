// Converted from test/suite/corpus/string-trim-pattern-regex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, end, inline, regex, space, start } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data('').trim(regex('.')), ''),
      space,
      test(data('123abc456').trim(regex('\\d')), 'abc'),
      space,
      test(data('123abc456').trim({ repeat: false }, regex('\\d')), '23abc45'),
      space,
      test(data('123a4b5c678').trim({ repeat: true }, regex('\\d')), 'a4b5c'),
      space,
      test(data('123a4b5c678').trim({ repeat: false }, regex('\\d')), '23a4b5c67'),
      space,
      test(data('123abc456').trim({ at: start }, regex('\\d')), 'abc456'),
      space,
      test(data('123abc456').trim({ at: end }, regex('\\d')), '123abc'),
      space,
      test(data('123abc456').trim({ at: end, repeat: false }, regex('\\d+')), '123abc'),
      space,
      test(data('123abc456').trim({ repeat: false }, regex('\\d{1,2}$')), '123abc4'),
      space,
      test(data('hello world').trim(regex('.')), ''),
      space,
      test(data('12306').trim({ at: start }, regex('\\d')), ''),
      space,
      test(data('12306abc').trim({ at: start }, regex('\\d')), 'abc'),
      space,
      test(data('whole').trim({ at: start }, regex('whole')), ''),
      space,
      test(data('12306').trim({ at: end }, regex('\\d')), ''),
      space,
      test(data('abc12306').trim({ at: end }, regex('\\d')), 'abc'),
      space,
      test(data('whole').trim({ at: end }, regex('whole')), ''),
    ),
  )
}
