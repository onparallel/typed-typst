// Converted from test/suite/corpus/page-marginal-style-text-call-code.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, inline, page, pt, red, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(codeBlock([set(page, { numbering: '1', margin: { bottom: pt(20) } })], text({ fill: red }, inline`Red`))),
  )
}
