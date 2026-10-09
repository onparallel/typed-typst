// Converted from test/suite/corpus/square.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, ltr, square, stack } from '../../../src/index.ts'

export default () => {
  return doc(inline(stack({ dir: ltr, spacing: em(0.5) }, square(), square(inline`hey!`))))
}
