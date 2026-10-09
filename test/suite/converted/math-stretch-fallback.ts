// Converted from test/suite/corpus/math-stretch-fallback.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, show, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { font: 'STIX Two Math' })),
      inline(
        unsafeRaw.math.block`lr(a / b|)_sqrt(c / d)`,
        space,
        unsafeRaw.math.block`integral_(-oo)^oo e^(-(m omega)/(2 planck) (x^2 + (2 i p)/(m omega) x)) dif x`,
      ),
    ),
  )
}
