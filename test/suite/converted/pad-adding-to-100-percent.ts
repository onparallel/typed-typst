// Converted from test/suite/corpus/pad-adding-to-100-percent.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, pad, pct } from '../../../src/index.ts'

export default () => {
  return doc(inline(pad(pct(50), inline())))
}
