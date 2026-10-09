// Converted from test/suite/corpus/justify-manual-linebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, par, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(par, { justify: true }), inline`A B C ${linebreak()} D`))
}
