// Converted from test/suite/corpus/math-attach-large-operator.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`tack.t.big_0^1 quad \\u{02A0A}_0^1 quad bowtie.big_0^1`,
      space,
      unsafeRaw.math`tack.t.big_0^1 quad \\u{02A0A}_0^1 quad bowtie.big_0^1`,
    ),
  )
}
