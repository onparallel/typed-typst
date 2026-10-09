// Converted from test/suite/corpus/math-attach-integral.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`integral.inter_a^b  quad \\u{2a1b}_a^b quad limits(\\u{2a1b})_a^b`,
      space,
      unsafeRaw.math`integral.inter_a^b quad \\u{2a1b}_a^b quad limits(\\u{2a1b})_a^b`,
    ),
  )
}
