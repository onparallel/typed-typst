// Converted from test/suite/corpus/page-marginal-style-show-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { numbering: '1', margin: { bottom: pt(20) } }), m.heading(1, 'Introduction')))
}
