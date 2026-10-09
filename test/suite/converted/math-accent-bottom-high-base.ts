// Converted from test/suite/corpus/math-accent-bottom-high-base.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math
        .block`accent(integral, \\u{20EC}), accent(integral, \\u{20EC})_a^b, accent(integral_a^b, \\u{20EC})`,
    ),
  )
}
