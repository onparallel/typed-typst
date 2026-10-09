// Converted from test/suite/corpus/line-numbers-auto-alignment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, end, inline, linebreak, m, page, par, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { margin: { right: cm(3) } }),
      set(par.line, { numbering: 'i', numberClearance: cm(1.5), numberMargin: end }),
    ),
    inline`First line ${linebreak()} Second line ${linebreak()} Third line`,
  )
}
