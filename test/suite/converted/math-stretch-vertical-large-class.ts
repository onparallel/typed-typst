// Converted from test/suite/corpus/math-stretch-vertical-large-class.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`integral
 stretch(integral, size: #3em)
 stretch(integral, size: #0em)
 stretch(integral, size: #50%)
 stretch(integral, size: #200%)`,
      space,
      unsafeRaw.math.block`integral
  stretch(integral, size: #3em)
  stretch(integral, size: #0em)
  stretch(integral, size: #50%)
  stretch(integral, size: #200%)`,
    ),
  )
}
