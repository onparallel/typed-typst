// Converted from test/suite/corpus/smartquote-bracket.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`"a ["b"] c" ${linebreak()} "a b"c"d e"`)
}
