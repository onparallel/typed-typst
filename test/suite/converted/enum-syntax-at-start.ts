// Converted from test/suite/corpus/enum-syntax-at-start.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`1.2 ${linebreak()} This is 0. ${linebreak()} See 0.3. ${linebreak()}`)
}
