// Converted from test/suite/corpus/std-basic-access.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, define, doc, grid, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(unsafeRaw.code<any>`std.grid`, grid), space, test(unsafeRaw.code<any>`std.calc`, calc)))
}
