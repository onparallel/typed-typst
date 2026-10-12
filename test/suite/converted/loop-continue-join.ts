// Converted from test/suite/corpus/loop-continue-join.typ by scripts/convert-suite.ts — do not edit.
import { T, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    let_(
      'x',
      unsafeRaw.code<any>`for i in range(5) {
  "a"
  if calc.rem(i, 3) == 0 {
    "_"
    continue
  }
  str(i)
}`,
    )[0],
    inline(test(unsafeRaw.code<any>`x`, 'a_a1a2a_a4')),
  )
}
