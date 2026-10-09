// Converted from test/suite/corpus/math-symbol-show-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, show, sym, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(sym.tack, (it, ctx) => unsafeRaw.math`#h(1em) it #h(1em)`),
      inline(unsafeRaw.math.block`a tack b`),
    ),
  )
}
