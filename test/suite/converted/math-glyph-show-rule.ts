// Converted from test/suite/corpus/math-glyph-show-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, orange, set, show, space, sym, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show('+', set(text, { font: 'Noto Sans Math', fill: orange })),
      inline(
        unsafeRaw.math.block`1 + 1 = +2`,
        space,
        show('+', text({ size: em(2) }, inline(sym.plus.o))),
        space,
        unsafeRaw.math.block`1 + 1 = +2`,
      ),
    ),
  )
}
