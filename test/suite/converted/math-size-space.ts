// Converted from test/suite/corpus/math-size-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`x space x script(space) x sscript(space) x \\
  x^inline(space) x^space x^sscript(space) x`),
  )
}
