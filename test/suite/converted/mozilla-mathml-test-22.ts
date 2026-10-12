// Converted from test/suite/corpus/mozilla-mathml-test-22.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`{ underbrace(
      overbrace(a\\, ...\\, a, k a's)\\, overbrace(b\\, ...\\, b, ell b's),
      k + ell "elements"
    ) }`),
  )
}
