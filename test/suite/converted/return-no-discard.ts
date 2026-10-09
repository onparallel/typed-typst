// Converted from test/suite/corpus/return-no-discard.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, state, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const f = define('f')
    .returns(T.any)
    .body((p) => codeBlock([state('hello').update('world'), unsafeRaw.code<any>`return`]))
  return doc(f.decl, inline(test(f(), state('hello').update('world'))))
}
