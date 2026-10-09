// Converted from test/suite/corpus/issue-8261-string-as-ellipsis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`"..."`))
}
