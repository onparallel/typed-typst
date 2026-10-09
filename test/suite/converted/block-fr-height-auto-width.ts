// Converted from test/suite/corpus/block-fr-height-auto-width.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  block,
  blocks,
  center,
  doc,
  fr,
  green,
  horizon,
  inline,
  m,
  page,
  pt,
  rect,
  set,
  space,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      set(align, { alignment: center }),
      inline(
        block(
          { inset: pt(5), stroke: green },
          inline(
            space,
            rect({ height: pt(10) }),
            space,
            block(
              { height: fr(1), stroke: pt(1), inset: pt(5) },
              blocks(m.lines(set(align, { alignment: add(center, horizon) }), 'I am the widest')),
            ),
            space,
            rect({ height: pt(10) }),
            space,
          ),
        ),
      ),
    ),
  )
}
