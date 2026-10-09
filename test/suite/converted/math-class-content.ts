// Converted from test/suite/corpus/math-class-content.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  black,
  center,
  circle,
  doc,
  em,
  horizon,
  inline,
  let_,
  pt,
  square,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [dotsqDecl, dotsq] = let_(
    'dotsq',
    square({ size: em(0.7), stroke: pt(0.5) }, align(add(center, horizon), circle({ radius: em(0.15), fill: black }))),
  )
  return doc(
    dotsqDecl,
    inline(unsafeRaw.math.block`a dotsq b \\
  a class("normal", dotsq) b \\
  a class("vary", dotsq) b \\
  a + class("vary", dotsq) b \\
  a class("punctuation", dotsq) b`),
  )
}
