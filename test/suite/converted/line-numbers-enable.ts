// Converted from test/suite/corpus/line-numbers-enable.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, linebreak, m, page, par, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { margin: { left: em(2.5) } }), set(par.line, { numbering: '1' })),
    inline`First line ${linebreak()} Second line ${linebreak()} Third line`,
  )
}
