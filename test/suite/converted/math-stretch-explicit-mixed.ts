// Converted from test/suite/corpus/math-stretch-explicit-mixed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`stretch(size: #200%, \\/) quad
  \\/ quad
  class("large", \\/) quad
  class("large", stretch(size: #200%, \\/)) quad
  stretch(size: #200%, class("large", \\/))`),
  )
}
