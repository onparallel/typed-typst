// Converted from test/suite/corpus/math-stretch-lr-nested-horizontal-attach.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`stretch(lr(=, size: #2em))_A
  stretch(lr(=, size: #2em), size: #0em)_A
  stretch(lr(=, size: #2em), size: #50%)_A
  stretch(lr(=, size: #2em), size: #200%)_A \\
  lr(stretch(=, size: #2em))_A
  lr(stretch(=, size: #2em), size: #0em)_A
  lr(stretch(=, size: #2em), size: #50%)_A
  lr(stretch(=, size: #2em), size: #200%)_A \\
  stretch(lr(=), size: #2em)_A
  stretch(lr(=, size: #0em), size: #2em)_A
  stretch(lr(=, size: #50%), size: #2em)_A
  stretch(lr(=, size: #200%), size: #2em)_A \\
  lr(stretch(=), size: #2em)_A
  lr(stretch(=, size: #0em), size: #2em)_A
  lr(stretch(=, size: #50%), size: #2em)_A
  lr(stretch(=, size: #200%), size: #2em)_A`),
  )
}
