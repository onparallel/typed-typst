// Converted from test/suite/corpus/math-vec-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`vec(-1, 1, -1, align: #left)
  vec(-1, 1, -1, align: #center)
  vec(-1, 1, -1, align: #right)`),
  )
}
