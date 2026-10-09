// Converted from test/suite/corpus/line-numbers-columns-override.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { colbreak, columns, doc, em, end, inline, linebreak, m, page, par, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(columns, { gutter: em(1.5) }),
      set(page, { columns: 2, margin: { x: em(1.5) } }),
      set(par.line, { numbering: '1', numberMargin: end, numberClearance: em(0.5) }),
    ),
    inline`Hello ${linebreak()} Beautiful ${linebreak()} World ${colbreak()} Birds ${linebreak()} In the
${linebreak()} Sky`,
  )
}
