// Converted from test/suite/corpus/math-root-precomposed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`sqrt(x)`,
      space,
      unsafeRaw.math`root(2, x)`,
      space,
      unsafeRaw.math`root(3, x)`,
      space,
      unsafeRaw.math`root(4, x)`,
      space,
      unsafeRaw.math`root(5, x)`,
    ),
  )
}
