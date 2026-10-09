// Converted from test/suite/corpus/math-pagebreaking.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, em, inline, m, math, page, set, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: em(5) }), show(math.equation, set(block, { breakable: true }))),
    inline(unsafeRaw.math.block`a &+ b + & c \\
  a &+ b   &   && + d \\
  a &+ b + & c && + d \\
    &      & c && + d \\
    &= 0`),
  )
}
