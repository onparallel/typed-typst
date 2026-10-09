// Converted from test/suite/corpus/line-numbers-columns-rtl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { colbreak, doc, em, inline, linebreak, m, page, par, rtl, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { columns: 2, margin: { x: em(1.5) } }),
      set(par.line, { numbering: '1', numberClearance: em(0.5) }),
      set(text, { dir: rtl }),
    ),
    inline`Hello ${linebreak()} Beautiful ${linebreak()} World ${colbreak()} Birds ${linebreak()} In the
${linebreak()} Sky`,
  )
}
