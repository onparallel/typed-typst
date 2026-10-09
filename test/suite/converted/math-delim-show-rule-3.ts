// Converted from test/suite/corpus/math-delim-show-rule-3.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, fuchsia, inline, m, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show('⏟', set(text, { fill: fuchsia })), inline(unsafeRaw.math.block`underbrace(1 + 1 = 2, "obviously")`)),
  )
}
