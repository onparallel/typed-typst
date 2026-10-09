// Converted from test/suite/corpus/math-stretch-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`H stretch(=)^"define" U + p V \\
  x stretch(harpoons.ltrb, size: #3em) y
    stretch(\\[, size: #150%) z \\
  f : X stretch(arrow.hook, size: #150%)_"injective" Y \\
  V stretch(->, size: #(100% + 1.5em))^("surjection") ZZ`),
  )
}
