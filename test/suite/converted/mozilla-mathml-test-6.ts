// Converted from test/suite/corpus/mozilla-mathml-test-6.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`a_0 + display(1 / (a_1 + display(1 / (a_2 + display(1 / (a_3 + display(1 / a_4)))))))`),
  )
}
