// Converted from test/suite/corpus/return-discard-markup.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const f = define('f').body((p) => inline`${space}hello ${unsafeRaw.code<any>`return [nope]`}${space}`)
  return doc(f.decl, inline(test(f(), inline`nope`)))
}
