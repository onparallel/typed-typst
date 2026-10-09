// Converted from test/suite/corpus/issue-5354-footnote-empty-frame-infinite-loop.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, footnote, inline, lorem, m, show, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(footnote.entry, (it, ctx) => codeBlock([])),
      inline(lorem(3), space, footnote(inline`A footnote`)),
    ),
  )
}
