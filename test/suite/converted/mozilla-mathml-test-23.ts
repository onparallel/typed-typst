// Converted from test/suite/corpus/mozilla-mathml-test-23.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`mat(
    mat(a, b; c, d), mat(e, f; g, h);
    0, mat(i, j; k, l);
  )`),
  )
}
