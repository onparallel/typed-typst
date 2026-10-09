// Converted from test/suite/corpus/string-starts-with.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, regex, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data('Typst').startsWith('Ty'), true),
      space,
      test(data('Typst').startsWith(regex('[Tt]ys')), false),
      space,
      test(data('Typst').startsWith('st'), false),
    ),
  )
}
