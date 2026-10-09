// Converted from test/suite/corpus/math-op-styled.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`bold(op("bold", limits: #true))_x y`))
}
