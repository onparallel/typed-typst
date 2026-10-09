// Converted from test/suite/corpus/math-text-styled-num.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, math, show, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`a"123.4"b quad a "123.4" b`,
      space,
      show(text, math.bold),
      space,
      unsafeRaw.math.block`a"123.4"b quad a "123.4" b`,
    ),
  )
}
