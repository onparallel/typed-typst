// Converted from test/suite/corpus/math-field-call-accent-eval-order-shadowed-push.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_, sym, symbol, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [spDecl, sp] = let_('sp', symbol('p', ['push', sym.tilde]))
  return doc(
    inline(
      codeBlock([
        spDecl,
        test(unsafeRaw.math`sp.push(#let sp = false;)`, unsafeRaw.math`#sym.tilde(none)`),
        test(sp, false),
      ]),
    ),
  )
}
