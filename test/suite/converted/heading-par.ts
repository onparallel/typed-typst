// Converted from test/suite/corpus/heading-par.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, highlight, m, par, show } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show(par, highlight), m.heading(1, 'Heading')))
}
