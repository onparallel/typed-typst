// Converted from test/suite/corpus/string-match.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, regex, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data('Is there a').match('for this?'), null),
      space,
      test(data('The time of my life.').match(regex('[mit]+e')), { start: 4, end: 8, text: 'time', captures: [] }),
    ),
  )
}
