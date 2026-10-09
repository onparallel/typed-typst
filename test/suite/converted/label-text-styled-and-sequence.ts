// Converted from test/suite/corpus/label-text-styled-and-sequence.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, label, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`[Hello<hi>].label`, label('hi')),
      space,
      test(unsafeRaw.code<any>`[#[A *B* C]<hi>].label`, label('hi')),
      space,
      test(unsafeRaw.code<any>`[#text(red)[Hello]<hi>].label`, label('hi')),
    ),
  )
}
