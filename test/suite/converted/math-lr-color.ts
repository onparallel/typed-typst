// Converted from test/suite/corpus/math-lr-color.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`lr(
    text(\\(, fill: #green) a/b
    text(\\), fill: #blue)
  )`),
  )
}
