// Converted from test/suite/corpus/std-import.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, grid, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(m.lines(unsafeRaw.markup`#import std: grid as banana`, inline(test(grid, unsafeRaw.code<any>`banana`))))
}
