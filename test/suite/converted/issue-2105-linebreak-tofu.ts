// Converted from test/suite/corpus/issue-2105-linebreak-tofu.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`${linebreak()}中文`)
}
