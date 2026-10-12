// Converted from test/suite/corpus/par-explicit-trim-space.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, par, space } from '../../../src/index.ts'

export default () => {
  return doc('A', inline(par(inline`${space}B${space}`)))
}
