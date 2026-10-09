// Converted from test/suite/corpus/issue-footnotes-skip-first-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, m, page, pt, set, space } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { height: pt(50) }), inline(footnote(inline`A`), space, footnote(inline`B`))))
}
