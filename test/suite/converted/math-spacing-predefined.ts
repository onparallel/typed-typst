// Converted from test/suite/corpus/math-spacing-predefined.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`a thin b, a med b, a thick b, a quad b`,
      space,
      linebreak(),
      space,
      unsafeRaw.math`a = thin b`,
      space,
      linebreak(),
      space,
      unsafeRaw.math`a - b equiv c quad (mod 2)`,
    ),
  )
}
