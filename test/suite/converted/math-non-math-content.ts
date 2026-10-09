// Converted from test/suite/corpus/math-non-math-content.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`op(#underline[ul]) a`))
}
