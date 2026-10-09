// Converted from test/suite/corpus/math-symbol-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, symbol, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [symDecl, sym_2] = let_('sym', symbol('s', ['basic', 's']))
  return doc(m.lines(symDecl, inline(test(unsafeRaw.math`sym.basic`, unsafeRaw.math`s`))))
}
