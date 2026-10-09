// Converted from test/suite/corpus/math-root-large-index.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`root(2, x) quad
  root(3/(2/1), x) quad
  root(1/11, x) quad
  root(1/2/3, 1)`),
  )
}
