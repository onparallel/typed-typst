// Converted from test/suite/corpus/loop-break-join-in-last-arg.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const identity = define('identity')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => p['x'])
  return doc(
    m.lines(
      identity.decl,
      unsafeRaw.markup`#let out = for i in range(5) {
  "A"
  identity({
    "B"
    break
  })
  "C"
}`,
    ),
    inline(test(unsafeRaw.code<any>`out`, 'AB')),
  )
}
