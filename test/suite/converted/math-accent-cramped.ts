// Converted from test/suite/corpus/math-accent-cramped.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`hat(x^2) x^2`, space, unsafeRaw.math.block`breve(scripts(sum)^X^X) scripts(sum)^X^X`),
  )
}
