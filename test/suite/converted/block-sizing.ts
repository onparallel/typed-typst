// Converted from test/suite/corpus/block-sizing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, blue, doc, green, inline, m, page, pct, pt, red, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(120) }),
      set(block, { spacing: pt(0) }),
      inline(
        block(
          { width: pt(90), height: pt(80), fill: red },
          inline(
            space,
            block({ width: pct(60), height: pct(60), fill: green }),
            space,
            block({ width: pct(50), height: pct(60), fill: blue }),
            space,
          ),
        ),
      ),
    ),
  )
}
