// Converted from test/suite/corpus/math-op-large-stretch.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`\\/ class("large", \\/) op(\\/) integral op(integral)`,
      space,
      unsafeRaw.math.block`\\/ class("large", \\/) op(\\/) integral op(integral)`,
    ),
  )
}
