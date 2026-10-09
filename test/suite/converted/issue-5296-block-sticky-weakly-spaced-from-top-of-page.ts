// Converted from test/suite/corpus/issue-5296-block-sticky-weakly-spaced-from-top-of-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, cm, doc, inline, m, page, set, strong, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: cm(3) }), inline(v({ weak: true }, cm(2)))),
    inline(block({ sticky: true }, inline(strong(inline`A`)))),
    'b',
  )
}
