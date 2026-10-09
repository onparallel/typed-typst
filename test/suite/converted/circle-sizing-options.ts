// Converted from test/suite/corpus/circle-sizing-options.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { circle, doc, inline, ltr, m, page, pct, pt, set, stack } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(120), height: pt(40) }),
      inline(
        stack(
          { dir: ltr, spacing: pt(2) },
          circle({ radius: pt(5) }),
          circle({ width: pct(10) }),
          circle({ height: pct(50) }),
        ),
      ),
    ),
  )
}
