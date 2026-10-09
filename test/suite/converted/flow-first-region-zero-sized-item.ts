// Converted from test/suite/corpus/flow-first-region-zero-sized-item.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, blocks, cm, doc, gray, inline, line, m, page, pct, pt, rect, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: cm(5), margin: cm(1) }),
      inline`In-flow, zero-sized item. ${block({ breakable: true, stroke: pt(1), inset: cm(0.4) }, blocks(m.lines(set(block, { spacing: pt(0) }), inline(line({ length: pt(0) }), space, rect({ height: cm(2), fill: gray }), space, line({ length: pct(100) })))))}`,
    ),
  )
}
