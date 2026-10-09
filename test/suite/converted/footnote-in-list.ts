// Converted from test/suite/corpus/footnote-in-list.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, m, page, pt, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(120) }),
    m.list(
      m.item(['A', space, footnote(inline`a`)]),
      m.item(['B', space, footnote(inline`b`)]),
      m.item(['C', space, footnote(inline`c`)]),
      m.item(['D', space, footnote(inline`d`)]),
      m.item(['E', space, footnote(inline`e`)]),
      m.item(['F', space, footnote(inline`f`)]),
      m.item(['G', space, footnote(inline`g`)]),
    ),
  )
}
