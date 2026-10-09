// Converted from test/suite/corpus/math-lr-fences.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`|x + |y| + z/a| \\
  lr(|x + |y| + z/a|)`),
  )
}
