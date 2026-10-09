// Converted from test/suite/corpus/math-lr-mid-class.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`(a | b)`,
      space,
      unsafeRaw.math.block`(a mid(|) b)`,
      space,
      unsafeRaw.math.block`(a class("unary", |) b)`,
      space,
      unsafeRaw.math.block`(a class("unary", mid(|)) b)`,
      space,
      unsafeRaw.math.block`(a mid(class("unary", |)) b)`,
    ),
  )
}
