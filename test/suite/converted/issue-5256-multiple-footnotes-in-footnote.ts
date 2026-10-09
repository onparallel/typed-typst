// Converted from test/suite/corpus/issue-5256-multiple-footnotes-in-footnote.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline(footnote(inline(footnote(inline`A`), footnote(inline`B`), footnote(inline`C`)))))
}
