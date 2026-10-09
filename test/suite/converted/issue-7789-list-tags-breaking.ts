// Converted from test/suite/corpus/issue-7789-list-tags-breaking.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, box, doc, em, inline, layout, list, m, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(list, {
      marker: add(
        inline`a`,
        layout((layout_info) => box({ height: em(100) })),
      ),
    }),
    m.list(m.item(m.lines('A', m.list(m.item(['A']))))),
  )
}
