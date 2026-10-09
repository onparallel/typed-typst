// Converted from test/suite/corpus/list-negative-indent-full-width.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  blocks,
  box,
  contentBlock,
  doc,
  em,
  inline,
  list,
  lorem,
  m,
  page,
  pct,
  pt,
  red,
  set,
  space,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(200) }),
      inline(
        contentBlock(blocks(m.lines(set(list, { indent: pt(-50) }), m.list(m.item([lorem(12)]))))),
        space,
        contentBlock(
          blocks(
            m.lines(
              set(list, { marker: box({ width: pct(100), height: em(1), fill: red }) }),
              m.list(m.item(['abc'])),
              set(list, { indent: pt(-50) }),
              m.list(m.item(['abc'])),
            ),
          ),
        ),
      ),
    ),
  )
}
