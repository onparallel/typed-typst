// Converted from test/suite/corpus/justify-limits-glyph-grow-only.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, block, doc, em, inline, lorem, m, par, pct, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { hyphenate: false, overhang: false }),
      set(par, {
        justify: true,
        justificationLimits: { spacing: { min: pct(100), max: pct(100) }, tracking: { min: em(0), max: em(0.5) } },
      }),
    ),
    inline(block({ fill: aqua.lighten(pct(50)), width: pct(100) }, lorem(10))),
  )
}
