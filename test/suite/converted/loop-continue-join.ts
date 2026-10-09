// Converted from test/suite/corpus/loop-continue-join.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    unsafeRaw.markup`#let x = for i in range(5) {
  "a"
  if calc.rem(i, 3) == 0 {
    "_"
    continue
  }
  str(i)
}`,
    inline(test(unsafeRaw.code<any>`x`, 'a_a1a2a_a4')),
  )
}
