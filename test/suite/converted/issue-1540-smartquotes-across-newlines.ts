// Converted from test/suite/corpus/issue-1540-smartquotes-across-newlines.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`"test"${linebreak()}"test"`, inline`"test"${linebreak()} "test"`)
}
