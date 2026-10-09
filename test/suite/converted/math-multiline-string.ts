// Converted from test/suite/corpus/math-multiline-string.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`"a\\nb\\n\\n\\n" "a\\nb\\n\\n" "a\\nb\\n" "a\\nb"`))
}
