// Converted from test/suite/corpus/math-mat-bad-comma.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`mat(1, 2; 3, 4, delim: "[")`))
}
