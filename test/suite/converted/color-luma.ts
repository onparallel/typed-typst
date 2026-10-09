// Converted from test/suite/corpus/color-luma.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, ltr, luma, pct, rect, stack } from '../../../src/index.ts'

export default () => {
  return doc(inline(stack({ dir: ltr }, rect({ fill: luma(0) }), rect({ fill: luma(pct(80)) }))))
}
