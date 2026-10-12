// Converted from test/suite/corpus/heading-par.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, highlight, inline, m, par, show } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show(par, highlight), heading({ depth: 1 }, inline('Heading'))))
}
