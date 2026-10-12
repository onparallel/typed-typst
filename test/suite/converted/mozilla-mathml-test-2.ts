// Converted from test/suite/corpus/mozilla-mathml-test-2.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`attach(F, bl: 2, br: 3)`))
}
