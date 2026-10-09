// Converted from test/suite/corpus/math-accent-bottom-cramped.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`accent(x^2, \\u{0330}) x^2`,
      space,
      unsafeRaw.math.block`accent(scripts(sum)^X^X, \\u{032D}) scripts(sum)^X^X`,
    ),
  )
}
