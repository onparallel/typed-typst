// Converted from test/suite/corpus/flow-first-region-placed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, box, cm, doc, gray, inline, m, page, pct, place, pt, rect, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: cm(5), margin: cm(1) }),
      inline`Placed item in the first region. ${block({ breakable: true, above: cm(1), stroke: pt(1), inset: cm(0.5) }, inline(space, place({ dx: cm(-0.5), dy: cm(-0.75) }, box({ width: pct(200) }, inline`OOF`)), space, rect({ height: cm(2), fill: gray }), space))}`,
    ),
  )
}
