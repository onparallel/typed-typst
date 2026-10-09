// Converted from test/suite/corpus/smartquote-slash.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`"Hello"/"World" ${linebreak()} '"Hello"/"World"' ${linebreak()} ""Hello"/"World""`)
}
