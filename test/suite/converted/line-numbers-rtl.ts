// Converted from test/suite/corpus/line-numbers-rtl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, linebreak, m, page, par, rtl, set, text, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { margin: { right: em(3) } }),
      set(text, { dir: rtl }),
      set(par.line, { numbering: '1' }),
      inline`a ${times(inline`${linebreak()} a`, 15)}`,
    ),
  )
}
