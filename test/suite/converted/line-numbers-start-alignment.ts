// Converted from test/suite/corpus/line-numbers-start-alignment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, linebreak, m, page, pagebreak, par, set, start } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { margin: { left: em(3) } }),
      set(par.line, { numbering: 'i', numberAlign: start }),
      inline`a ${linebreak()} a ${pagebreak()} a ${linebreak()} a ${linebreak()} a`,
    ),
  )
}
