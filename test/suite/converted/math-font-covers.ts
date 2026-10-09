// Converted from test/suite/corpus/math-font-covers.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, regex, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(
        math.equation,
        set(text, {
          font: [{ name: 'XITS Math', covers: regex('[𝒜-𝔃]') }, 'New Computer Modern Math'],
          stylisticSet: 1,
        }),
      ),
      inline(unsafeRaw.math.block`cal(P)_i (X) * cal(C)_1`),
    ),
  )
}
