// Converted from test/suite/corpus/math-accent-superscript.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math`A^x != hat(A)^x != hat(hat(A))^x`))
}
