// Converted from test/suite/corpus/math-mat-delim-class.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`2mat(a, delim: bar.v) 2`, space, unsafeRaw.math.block`2 mat(a, delim: bar.v)2`),
  )
}
