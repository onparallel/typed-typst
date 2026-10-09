// Converted from test/suite/corpus/math-root-frame-size-index.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`a root(, 3)         & a root(., 3) \\
  a sqrt(3)           & a root(2, 3) \\
  a root(#h(-1em), 3) & a root(123, 3)`),
  )
}
