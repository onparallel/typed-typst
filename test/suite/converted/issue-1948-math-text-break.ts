// Converted from test/suite/corpus/issue-1948-math-text-break.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`x := "a\\nb\\nc\\nd\\ne"`))
}
