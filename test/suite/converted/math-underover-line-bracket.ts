// Converted from test/suite/corpus/math-underover-line-bracket.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`x = overbracket(
  overline(underline(x + y)),
  1 + 2 + ... + 5,
)`),
  )
}
