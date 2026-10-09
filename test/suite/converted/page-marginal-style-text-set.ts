// Converted from test/suite/corpus/page-marginal-style-text-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, page, pt, red, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { numbering: '1', margin: { bottom: pt(20) } }), set(text, { fill: red }), 'Red'))
}
