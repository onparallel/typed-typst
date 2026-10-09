// Converted from test/suite/corpus/list-negative-indent-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  block,
  blocks,
  box,
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
        block(blocks(m.lines(set(list, { indent: pt(-50) }), m.list(m.item([lorem(12)]))))),
        space,
        block(
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
