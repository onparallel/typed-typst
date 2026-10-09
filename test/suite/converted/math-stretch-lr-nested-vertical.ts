// Converted from test/suite/corpus/math-stretch-lr-nested-vertical.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`stretch(lr(arrow.t, size: #3em))
  stretch(lr(arrow.t, size: #3em), size: #0em)
  stretch(lr(arrow.t, size: #3em), size: #50%)
  stretch(lr(arrow.t, size: #3em), size: #200%),
  lr(stretch(arrow.t, size: #3em))
  lr(stretch(arrow.t, size: #3em), size: #0em)
  lr(stretch(arrow.t, size: #3em), size: #50%)
  lr(stretch(arrow.t, size: #3em), size: #200%),
  stretch(lr(arrow.t), size: #3em)
  stretch(lr(arrow.t, size: #0em), size: #3em)
  stretch(lr(arrow.t, size: #50%), size: #3em)
  stretch(lr(arrow.t, size: #200%), size: #3em),
  lr(stretch(arrow.t), size: #3em)
  lr(stretch(arrow.t, size: #0em), size: #3em)
  lr(stretch(arrow.t, size: #50%), size: #3em)
  lr(stretch(arrow.t, size: #200%), size: #3em)`),
  )
}
