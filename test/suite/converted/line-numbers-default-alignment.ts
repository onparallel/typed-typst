// Converted from test/suite/corpus/line-numbers-default-alignment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, linebreak, m, page, par, set, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { margin: { left: em(3) } }),
      set(par.line, { numbering: '1' }),
      inline`a ${times(inline`${linebreak()} a`, 15)}`,
    ),
  )
}
