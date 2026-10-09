// Converted from test/suite/corpus/par-hanging-indent-manual-linebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, linebreak, m, par, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(par, { hangingIndent: em(1) }), inline`Welcome ${linebreak()} here. Does this work well?`))
}
