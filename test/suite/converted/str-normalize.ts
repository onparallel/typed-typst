// Converted from test/suite/corpus/str-normalize.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data('é').normalize({ form: 'nfc' }), 'é'),
      space,
      test(data('é').normalize({ form: 'nfd' }), 'é'),
      space,
      test(data('ſ́').normalize({ form: 'nfkc' }), 'ś'),
      space,
      test(data('ſ́').normalize({ form: 'nfkd' }), 'ś'),
    ),
  )
}
