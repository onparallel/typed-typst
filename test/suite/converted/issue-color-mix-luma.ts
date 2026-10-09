// Converted from test/suite/corpus/issue-color-mix-luma.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { black, doc, gradient, inline, luma, rect, silver } from '../../../src/index.ts'

export default () => {
  return doc(inline(rect({ fill: gradient.linear({ space: luma }, black, silver) })))
}
