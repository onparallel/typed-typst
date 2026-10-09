// Converted from test/suite/corpus/import-from-function-scope-renamed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, enum_, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(m.lines(unsafeRaw.markup`#import enum as othernum`, inline(test(enum_, unsafeRaw.code<any>`othernum`))))
}
