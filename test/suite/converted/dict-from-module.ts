// Converted from test/suite/corpus/dict-from-module.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, dictionary, doc, inline, space, type, unsafeRaw, version } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(type(dictionary(unsafeRaw.code<any>`sys`).at('version')), version),
      space,
      test(dictionary(unsafeRaw.code<any>`sys`).at({ default: null }, 'no-crash'), null),
    ),
  )
}
