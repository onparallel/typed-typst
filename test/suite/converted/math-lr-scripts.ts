// Converted from test/suite/corpus/math-lr-scripts.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`lr(size: #3em, |)_a^b lr(size: #3em, zws|)_a^b
  lr(size: #3em, [x])_0^1 [x]_0^1
  lr(size: #1em, lr(size: #10em, [x]))_0^1`),
  )
}
