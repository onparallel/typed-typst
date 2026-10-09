// Converted from test/suite/corpus/issue-3658-math-size.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`#rect[$1/2$]`, space, unsafeRaw.math`#rect[$1/2$]`))
}
