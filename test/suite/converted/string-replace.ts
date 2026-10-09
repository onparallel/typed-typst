// Converted from test/suite/corpus/string-replace.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, regex, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data('ABC').replace('', '-'), '-A-B-C-'),
      space,
      test(data('Ok').replace({ count: 0 }, 'Ok', 'Nope'), 'Ok'),
      space,
      test(data('to add?').replace({ count: 1 }, '', 'How '), 'How to add?'),
      space,
      test(data('AB C DEF GH J').replace({ count: 2 }, ' ', ','), 'AB,C,DEF GH J'),
      space,
      test(data('Walcemo').replace('o', 'k').replace('e', 'o').replace('k', 'e').replace('a', 'e'), 'Welcome'),
      space,
      test(data('123').replace(regex('\\d$'), '_'), '12_'),
      space,
      test(data('123').replace(regex('\\d{1,2}$'), '__'), '1__'),
    ),
  )
}
