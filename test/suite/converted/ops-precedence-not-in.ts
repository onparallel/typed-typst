// Converted from test/suite/corpus/ops-precedence-not-in.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(unsafeRaw.code<any>`-1 not in (1, 2, 3)`, true)))
}
