// Converted from test/suite/corpus/math-equation-number-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, math } from '../../../src/index.ts'

export default () => {
  return doc(inline(math.equation({ numbering: '1', block: true }, inline())))
}
