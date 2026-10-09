// Converted from test/suite/corpus/math-accent-func.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math`accent(ö, .), accent(v, <-), accent(ZZ, \\u{0303})`))
}
