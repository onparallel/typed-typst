// Converted from test/suite/corpus/label-string-conversion.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, label, space, str, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(str(label('hey')), 'hey'),
      space,
      test(str(label('hey')), 'hey'),
      space,
      test(str(unsafeRaw.code<any>`[Hmm<hey>].label`), 'hey'),
    ),
  )
}
