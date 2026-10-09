// Converted from test/suite/corpus/page-marginal-style-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, page, pt, red, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { fill: red }), set(page, { numbering: '1', margin: { bottom: pt(20) } })))
}
