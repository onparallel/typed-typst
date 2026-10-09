// Converted from test/suite/corpus/math-style.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math`A, italic(A), upright(A), bold(A), bold(upright(A)), \\
 serif(A), sans(A), cal(A), frak(A), mono(A), bb(A), \\
 italic(partial), upright(partial), \\
 bb("hello") + bold(cal("world")), \\
 mono("SQRT")(x) wreath mono(123 + 456)`),
  )
}
