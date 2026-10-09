// Converted from test/suite/corpus/length-fields.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, float, inline, pt, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`(1pt).em`, float(0)),
      space,
      test(unsafeRaw.code<any>`(1pt).abs`, pt(1)),
      space,
      test(unsafeRaw.code<any>`(3em).em`, float(3)),
      space,
      test(unsafeRaw.code<any>`(3em).abs`, pt(0)),
      space,
      test(unsafeRaw.code<any>`(2em + 2pt).em`, float(2)),
      space,
      test(unsafeRaw.code<any>`(2em + 2pt).abs`, pt(2)),
    ),
  )
}
