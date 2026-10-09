// Converted from test/suite/corpus/columns-in-fixed-size-rect.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, columns, doc, inline, page, pt, rect, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: auto }),
    inline(
      rect(
        { width: pt(180), height: pt(100), inset: pt(8) },
        columns(
          2,
          inline`${space}A special plight has befallen our document. Columns in text boxes reigned down unto
the soil to waste a year's crop of rich layouts. The columns at least were graciously balanced.${space}`,
        ),
      ),
    ),
  )
}
