// Converted from test/suite/corpus/math-stretch-lr-nested-horizontal.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`stretch(lr(=, size: #2em))
  stretch(lr(=, size: #2em), size: #0em)
  stretch(lr(=, size: #2em), size: #50%)
  stretch(lr(=, size: #2em), size: #200%) \\
  lr(stretch(=, size: #2em))
  lr(stretch(=, size: #2em), size: #0em)
  lr(stretch(=, size: #2em), size: #50%)
  lr(stretch(=, size: #2em), size: #200%) \\
  stretch(lr(=), size: #2em)
  stretch(lr(=, size: #0em), size: #2em)
  stretch(lr(=, size: #50%), size: #2em)
  stretch(lr(=, size: #200%), size: #2em) \\
  lr(stretch(=), size: #2em)
  lr(stretch(=, size: #0em), size: #2em)
  lr(stretch(=, size: #50%), size: #2em)
  lr(stretch(=, size: #200%), size: #2em)`),
  )
}
