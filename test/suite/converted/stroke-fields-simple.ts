// Converted from test/suite/corpus/stroke-fields-simple.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, auto, blue, define, doc, em, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`(1em + blue).paint`, blue),
      space,
      test(unsafeRaw.code<any>`(1em + blue).thickness`, em(1)),
      space,
      test(unsafeRaw.code<any>`(1em + blue).cap`, auto),
      space,
      test(unsafeRaw.code<any>`(1em + blue).join`, auto),
      space,
      test(unsafeRaw.code<any>`(1em + blue).dash`, auto),
      space,
      test(unsafeRaw.code<any>`(1em + blue).miter-limit`, auto),
    ),
  )
}
