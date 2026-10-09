// Converted from test/suite/corpus/issue-7763-text-tags-span-order.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, inline, stack, strong } from '../../../src/index.ts'

export default () => {
  return doc(inline(stack(inline`A text ${strong(inline`outside`)} of ${emph(inline`a paragraph`)}`)))
}
