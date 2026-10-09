// Converted from test/suite/corpus/math-cancel-inline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math`a + 5 + cancel(x) + b - cancel(x)`),
    inline(unsafeRaw.math`c + (a dot.c cancel(b dot.c c))/(cancel(b dot.c c))`),
  )
}
