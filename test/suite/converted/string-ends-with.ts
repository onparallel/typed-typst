// Converted from test/suite/corpus/string-ends-with.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, regex, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data('Typst').endsWith('st'), true),
      space,
      test(data('Typst').endsWith(regex('\\d*')), true),
      space,
      test(data('Typst').endsWith(regex('\\d+')), false),
      space,
      test(data('Typ12').endsWith(regex('\\d+')), true),
      space,
      test(data('typst13').endsWith(regex('1[0-9]')), true),
      space,
      test(data('typst113').endsWith(regex('1[0-9]')), true),
      space,
      test(data('typst23').endsWith(regex('1[0-9]')), false),
    ),
  )
}
