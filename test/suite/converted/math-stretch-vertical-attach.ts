// Converted from test/suite/corpus/math-stretch-vertical-attach.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`arrow.t`,
      space,
      unsafeRaw.math`stretch(arrow.t)^"map"`,
      space,
      unsafeRaw.math`stretch(arrow.t, size: #2em)^"map"`,
      space,
      unsafeRaw.math`stretch(arrow.t, size: #200%)^"map"`,
    ),
  )
}
