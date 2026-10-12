// Converted from test/suite/corpus/math-lr-shorthands.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math`floor(x/2), ceil(x/2), abs(x), norm(x)`))
}
