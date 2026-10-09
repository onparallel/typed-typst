// Converted from test/suite/corpus/import-module-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, define, doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(m.lines(unsafeRaw.markup`#import std.calc: pi`, inline(test(unsafeRaw.code<any>`pi`, calc.pi))))
}
