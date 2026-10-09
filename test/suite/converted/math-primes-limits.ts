// Converted from test/suite/corpus/math-primes-limits.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`attach(<, t: ')`,
      space,
      unsafeRaw.math.block`<^'`,
      space,
      unsafeRaw.math.block`attach(<, b: ')`,
      space,
      unsafeRaw.math.block`<_'`,
    ),
    inline(unsafeRaw.math.block`limits(x)^'`, space, unsafeRaw.math.block`attach(limits(x), t: ')`),
  )
}
