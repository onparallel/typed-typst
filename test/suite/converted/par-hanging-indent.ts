// Converted from test/suite/corpus/par-hanging-indent.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, lorem, m, par, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(par, { hangingIndent: pt(15), justify: true }), inline(lorem(10))))
}
