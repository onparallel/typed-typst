// Converted from test/suite/corpus/issue-5262-block-negative-height.typ by scripts/convert-suite.ts — do not edit.
import { block, doc, inline, pt } from '../../../src/index.ts'

export default () => {
  return doc(inline(block({ height: pt(-1) }, inline())))
}
