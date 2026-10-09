// Converted from test/suite/corpus/math-equation-number-align-monoline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bottom, doc, inline, m, math, set, top, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(math.equation, { numbering: '(1)' }), inline(unsafeRaw.math.block`p = sum_k k ln a`)),
    m.lines(set(math.equation, { numbering: '(1)', numberAlign: top }), inline(unsafeRaw.math.block`p = sum_k k ln a`)),
    m.lines(
      set(math.equation, { numbering: '(1)', numberAlign: bottom }),
      inline(unsafeRaw.math.block`p = sum_k k ln a`),
    ),
  )
}
