// Converted from test/suite/corpus/list-big-marker-full-width.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, contentBlock, doc, inline, list, lorem, m, page, pt, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(200) }),
      inline(
        contentBlock(blocks(m.lines(set(list, { indent: pt(100) }), m.list(m.item([lorem(12)]))))),
        space,
        contentBlock(
          blocks(m.lines(set(list, { marker: inline`AAAAAAAAAAAAAAAAAAAAA` }), m.list(m.item([lorem(12)])))),
        ),
      ),
    ),
  )
}
