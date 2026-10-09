// Converted from test/suite/corpus/math-equation-show-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`This is small: ${unsafeRaw.math`sum_(i=0)^n`}`,
    m.lines(show(math.equation, math.display), inline`This is big: ${unsafeRaw.math`sum_(i=0)^n`}`),
  )
}
