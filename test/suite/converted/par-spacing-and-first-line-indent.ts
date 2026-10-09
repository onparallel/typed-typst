// Converted from test/suite/corpus/par-spacing-and-first-line-indent.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, par, pt, set, sym } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(par, { firstLineIndent: pt(12) }), inline`Why would anybody ever ...`),
    inline`... want spacing and indent?`,
  )
}
