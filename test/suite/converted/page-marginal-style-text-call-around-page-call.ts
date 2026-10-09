// Converted from test/suite/corpus/page-marginal-style-text-call-around-page-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, page, pt, red, text } from '../../../src/index.ts'

export default () => {
  return doc(inline(text({ fill: red }, page({ numbering: '1', margin: { bottom: pt(20) } }, inline`Hello`))))
}
