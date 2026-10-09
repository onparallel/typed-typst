// Converted from test/suite/corpus/math-spacing-kept-spaces.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`f (x), f(x)`,
      space,
      linebreak(),
      space,
      unsafeRaw.math`[a|b], [a | b]`,
      space,
      linebreak(),
      space,
      unsafeRaw.math`a"is"b, a "is" b`,
      space,
      linebreak(),
      space,
      unsafeRaw.math`A"B"C, A "B" C`,
    ),
  )
}
