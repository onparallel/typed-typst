// Converted from test/suite/corpus/block-fr-height-multiple.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, deg, doc, fr, inline, line, m, page, pct, pt, rect, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      inline(
        rect({ height: fr(1) }),
        space,
        rect(),
        space,
        block({ height: fr(1) }, line({ length: pct(100), angle: deg(90) })),
      ),
    ),
  )
}
