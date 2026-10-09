// Converted from test/suite/corpus/math-lr-weak-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`[#h(1em, weak: true)A(dif x, f(x) dif x)sum#h(1em, weak: true)]`,
      space,
      unsafeRaw.math.block`lr(\\[#h(1em, weak: true)lr(A dif x, f(x) dif x\\))sum#h(1em, weak:true)a)`,
    ),
  )
}
