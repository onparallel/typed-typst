// Converted from test/suite/corpus/block-fr-height.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, block, center, doc, fr, inline, m, page, pct, pt, rect, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      inline(
        rect({ height: pt(10), width: pct(100) }),
        space,
        align(center, block({ height: fr(1), width: pt(20), stroke: pt(1) })),
        space,
        rect({ height: pt(10), width: pct(100) }),
      ),
    ),
  )
}
