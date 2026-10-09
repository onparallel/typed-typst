// Converted from test/suite/corpus/math-primes-scripts.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`x'`,
      space,
      unsafeRaw.math.block`x^'`,
      space,
      unsafeRaw.math.block`attach(x, t: ')`,
      space,
      unsafeRaw.math.block`<'`,
      space,
      unsafeRaw.math.block`attach(<, br: ')`,
      space,
      unsafeRaw.math.block`op(<, limits: #true)'`,
      space,
      unsafeRaw.math.block`limits(<)'`,
    ),
  )
}
