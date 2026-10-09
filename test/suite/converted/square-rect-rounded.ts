// Converted from test/suite/corpus/square-rect-rounded.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, h, inline, ltr, pct, pt, set, square, stack } from '../../../src/index.ts'

export default () => {
  return doc(
    set(square, { size: pt(20), stroke: pt(4) }),
    inline(stack({ dir: ltr }, square(), h(pt(10)), square({ radius: pt(0) }), h(pt(10)), square({ radius: pt(-10) }))),
    inline(
      stack({ dir: ltr }, square(), h(pt(10)), square({ radius: pct(0) }), h(pt(10)), square({ radius: pct(-10) })),
    ),
    inline(
      stack(
        { dir: ltr },
        square({ radius: pt(1) }),
        h(pt(10)),
        square({ radius: pct(5) }),
        h(pt(10)),
        square({ radius: pt(2) }),
      ),
    ),
    inline(
      stack(
        { dir: ltr },
        square({ radius: pt(8) }),
        h(pt(10)),
        square({ radius: pt(10) }),
        h(pt(10)),
        square({ radius: pt(12) }),
      ),
    ),
    inline(
      stack(
        { dir: ltr },
        square({ radius: pct(45) }),
        h(pt(10)),
        square({ radius: pct(50) }),
        h(pt(10)),
        square({ radius: pct(55) }),
      ),
    ),
  )
}
