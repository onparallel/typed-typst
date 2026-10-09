// Converted from test/suite/corpus/line-numbers-clearance.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, inline, linebreak, m, page, par, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { margin: { left: cm(1.5) } }), set(par.line, { numbering: '1', numberClearance: cm(0) })),
    inline`First line ${linebreak()} Second line ${linebreak()} Third line`,
  )
}
