// Converted from test/suite/corpus/par-first-line-indent-columns.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { colbreak, doc, em, inline, linebreak, par, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(par, { firstLineIndent: { amount: em(1), all: false } }),
    inline`A ${linebreak()} B`,
    inline`C ${linebreak()} D`,
    inline(colbreak()),
    inline`E ${linebreak()} F`,
    inline`G ${linebreak()} H`,
  )
}
