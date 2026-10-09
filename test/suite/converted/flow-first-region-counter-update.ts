// Converted from test/suite/corpus/flow-first-region-counter-update.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, cm, counter, doc, gray, inline, m, page, pt, rect, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: cm(5), margin: cm(1) }),
      inline`Counter update. ${block({ breakable: true, stroke: pt(1), inset: cm(0.5) }, inline(space, counter('dummy').step(), space, rect({ height: cm(2), fill: gray }), space))}`,
    ),
  )
}
