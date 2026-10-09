// Converted from test/suite/corpus/line-numbers-equation-number.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, math, page, par, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { margin: { left: em(2.5) } }),
      set(par.line, { numbering: '1' }),
      set(math.equation, { numbering: '(1)' }),
    ),
    inline`A ${unsafeRaw.math.block`x`} B`,
  )
}
