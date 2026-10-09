// Converted from test/suite/corpus/issue-5262-block-negative-height.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, pt } from '../../../src/index.ts'

export default () => {
  return doc(inline(block({ height: pt(-1) }, inline())))
}
