// Converted from test/suite/corpus/math-style-greek-exceptions.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math`bb(Gamma) , bb(gamma), bb(Pi), bb(pi), bb(sum)`))
}
