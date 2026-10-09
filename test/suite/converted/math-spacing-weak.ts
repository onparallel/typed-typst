// Converted from test/suite/corpus/math-spacing-weak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`${unsafeRaw.math`integral f(x) dif x`}, ${unsafeRaw.math`integral f(x) thin dif x`}, ${unsafeRaw.math`integral f(x) #h(0.166em, weak: true)dif x`}`,
  )
}
