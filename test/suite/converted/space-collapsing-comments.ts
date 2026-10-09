// Converted from test/suite/corpus/space-collapsing-comments.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`ABC ${linebreak()} A BC ${linebreak()} A B C`)
}
