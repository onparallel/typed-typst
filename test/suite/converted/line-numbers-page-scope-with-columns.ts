// Converted from test/suite/corpus/line-numbers-page-scope-with-columns.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, colbreak, doc, inline, linebreak, m, page, pagebreak, par, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { margin: { x: cm(1.1) }, columns: 2 }),
      set(par.line, { numbering: '1', numberClearance: cm(0.5), numberingScope: 'page' }),
    ),
    inline`A ${linebreak()} A ${linebreak()} A ${colbreak()} B ${linebreak()} B ${linebreak()} B ${pagebreak()}
One ${linebreak()} Two ${linebreak()} Three ${colbreak()} Four ${linebreak()} Five ${linebreak()}
Six ${page(inline`${space}Page ${linebreak()} Elem ${colbreak()} Number ${linebreak()} Reset${space}`)}
We're back ${colbreak()} Bye!`,
  )
}
