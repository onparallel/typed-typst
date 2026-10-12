// Converted from test/suite/corpus/par-trailing-whitespace.typ by scripts/convert-suite.ts — do not edit.
import { aqua, box, doc, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline(box({ fill: aqua }, ' ')))
}
