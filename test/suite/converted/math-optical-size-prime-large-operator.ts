// Converted from test/suite/corpus/math-optical-size-prime-large-operator.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`scripts(sum_(k in NN))^prime 1/k^2`, space, unsafeRaw.math`sum_(k in NN)^prime 1/k^2`),
  )
}
