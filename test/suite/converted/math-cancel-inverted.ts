// Converted from test/suite/corpus/math-cancel-inverted.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`a + cancel(x, inverted: #true) - cancel(x, inverted: #true) + 10 + cancel(y) - cancel(y)`,
      space,
      unsafeRaw.math.block`x + cancel("abcdefg", inverted: #true)`,
    ),
  )
}
