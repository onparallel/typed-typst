// Converted from test/suite/corpus/loop-break-join-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [iDecl, i] = let_('i', 0)
  return doc(
    m.lines(
      iDecl,
      unsafeRaw.markup`#let x = while true {
  i += 1
  str(i)
  if i >= 5 {
    "."
    break
  }
}`,
    ),
    inline(test(unsafeRaw.code<any>`x`, '12345.')),
  )
}
