// Converted from test/suite/corpus/math-field-call-accent-eval-order-shadowed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_, sym, symbol, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [smDecl, sm] = let_('sm', symbol('m', ['method', sym.tilde]))
  return doc(
    inline(
      codeBlock([
        smDecl,
        test(unsafeRaw.math`sm.method(#let sm = false;)`, unsafeRaw.math`#sym.tilde(none)`),
        test(sm, false),
      ]),
    ),
  )
}
