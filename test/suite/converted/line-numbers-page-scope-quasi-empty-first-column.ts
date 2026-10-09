// Converted from test/suite/corpus/line-numbers-page-scope-quasi-empty-first-column.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, cm, colbreak, doc, inline, m, page, pagebreak, par, place, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { margin: { x: cm(1.1) }, height: cm(2), columns: 2 }),
      set(par.line, { numbering: '1', numberClearance: cm(0.5), numberingScope: 'page' }),
    ),
    inline`First line ${colbreak()} Second line ${pagebreak()} ${place(inline())} ${box({ height: cm(2) }, inline`First!`)}`,
  )
}
