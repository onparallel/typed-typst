// Converted from test/suite/corpus/line-numbers-multi-columns.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { colbreak, doc, em, inline, linebreak, m, page, par, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { columns: 3, margin: { x: em(1.5) } }),
      set(par.line, { numbering: '1', numberClearance: em(0.5) }),
    ),
    inline`A ${linebreak()} B ${linebreak()} C ${colbreak()} D ${linebreak()} E ${linebreak()} F ${colbreak()}
G ${linebreak()} H ${linebreak()} I`,
  )
}
