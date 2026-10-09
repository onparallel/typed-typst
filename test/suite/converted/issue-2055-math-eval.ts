// Converted from test/suite/corpus/issue-2055-math-eval.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.code<any>`eval(mode: "math", "f(a) = cases(a + b\\, space space x >= 3,a + b\\, space space x = 5)")`,
    ),
    inline(unsafeRaw.math`f(a) = cases(a + b\\, space space x >= 3,a + b\\, space space x = 5)`),
  )
}
