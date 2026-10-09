// Converted from test/suite/corpus/outline-par.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, highlight, inline, m, outline, par, show } from '../../../src/index.ts'

export default () => {
  return doc(show(par, highlight), inline(outline()), m.lines(m.heading(1, 'A'), m.heading(1, 'B'), m.heading(1, 'C')))
}
