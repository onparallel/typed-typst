// Converted from test/suite/corpus/math-lr-sym-func-repr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, repr, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(repr(unsafeRaw.code<any>`outline(indent: sym.chevron.l.curly).indent`), '(..) => ..')))
}
