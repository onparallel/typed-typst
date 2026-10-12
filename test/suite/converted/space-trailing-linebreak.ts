// Converted from test/suite/corpus/space-trailing-linebreak.typ by scripts/convert-suite.ts — do not edit.
import { doc, emph, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline`LLLLLLLLLLLLLLLLLL R ${emph(inline`L`)}`)
}
