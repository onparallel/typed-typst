// Converted from test/suite/corpus/issue-grid-base-auto-row.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, blue, cm, doc, green, inline, m, page, pct, pt, rect, red, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(150) }),
      inline(
        table(
          { columns: [cm(1.5), auto], rows: [auto, auto] },
          rect({ width: pct(100), fill: red }),
          rect({ width: pct(100), fill: blue }),
          rect({ width: pct(100), height: pct(50), fill: green }),
        ),
      ),
    ),
  )
}
