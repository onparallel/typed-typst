// Converted from test/suite/corpus/place-top-left-in-box.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, aqua, box, doc, inline, left, line, pct, place, pt, space, top, v } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      box(
        { fill: aqua },
        inline(
          space,
          place({ dx: pct(50), dy: pct(50) }, add(top, left), inline`Hi`),
          space,
          v(pt(30)),
          space,
          line({ length: pt(50) }),
          space,
        ),
      ),
    ),
  )
}
