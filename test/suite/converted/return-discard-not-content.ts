// Converted from test/suite/corpus/return-discard-not-content.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const f = define('f')
    .returns(T.any)
    .body((p) => codeBlock([[33], unsafeRaw.code<any>`return (66,)`]))
  return doc(f.decl, inline(test(f(), [66])))
}
