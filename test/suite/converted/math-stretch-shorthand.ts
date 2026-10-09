// Converted from test/suite/corpus/math-stretch-shorthand.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`stretch(||, size: #2em)`,
      space,
      unsafeRaw.math`stretch(\\(, size: #2em)`,
      space,
      unsafeRaw.math`stretch(⟧, size: #2em)`,
      space,
      unsafeRaw.math`stretch(|, size: #2em)`,
      space,
      unsafeRaw.math`stretch(->, size: #2em)`,
      space,
      unsafeRaw.math`stretch(↣, size: #2em)`,
    ),
  )
}
