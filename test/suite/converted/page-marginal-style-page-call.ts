// Converted from test/suite/corpus/page-marginal-style-page-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, inline, m, page, pt, red, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(page({ numbering: '1', margin: { bottom: pt(20) } }, blocks(m.lines(set(text, { fill: red }), 'A')))),
  )
}
