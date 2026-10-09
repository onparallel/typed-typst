// Converted from test/suite/corpus/math-stretch-lr-nested-vertical-attach.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`stretch(lr(arrow.t, size: #3em))^A
  stretch(lr(arrow.t, size: #3em), size: #0em)^A
  stretch(lr(arrow.t, size: #3em), size: #50%)^A
  stretch(lr(arrow.t, size: #3em), size: #200%)^A,
  lr(stretch(arrow.t, size: #3em))^A
  lr(stretch(arrow.t, size: #3em), size: #0em)^A
  lr(stretch(arrow.t, size: #3em), size: #50%)^A
  lr(stretch(arrow.t, size: #3em), size: #200%)^A,
  stretch(lr(arrow.t), size: #3em)^A
  stretch(lr(arrow.t, size: #0em), size: #3em)^A
  stretch(lr(arrow.t, size: #50%), size: #3em)^A
  stretch(lr(arrow.t, size: #200%), size: #3em)^A,
  lr(stretch(arrow.t), size: #3em)^A
  lr(stretch(arrow.t, size: #0em), size: #3em)^A
  lr(stretch(arrow.t, size: #50%), size: #3em)^A
  lr(stretch(arrow.t, size: #200%), size: #3em)^A`),
  )
}
