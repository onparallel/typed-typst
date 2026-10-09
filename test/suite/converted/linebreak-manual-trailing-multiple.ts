// Converted from test/suite/corpus/linebreak-manual-trailing-multiple.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`Trailing break ${linebreak()} ${linebreak()}`)
}
