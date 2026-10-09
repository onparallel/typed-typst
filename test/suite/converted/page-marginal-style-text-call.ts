// Converted from test/suite/corpus/page-marginal-style-text-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pt, red, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { numbering: '1', margin: { bottom: pt(20) } }), inline(text({ fill: red }, inline`Red`))),
  )
}
