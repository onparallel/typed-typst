// Converted from test/suite/corpus/grid-rtl-rowspan.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  auto,
  block,
  bottom,
  doc,
  em,
  inline,
  m,
  orange,
  page,
  pct,
  place,
  red,
  rtl,
  set,
  strong,
  table,
  text,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(10) }),
      set(text, { dir: rtl }),
      inline(
        table(
          { columns: 2, rows: [auto, auto, em(3)], rowGutter: em(1), fill: red },
          inline`a`,
          table.cell(
            { rowspan: 3 },
            add(block({ width: pct(50), height: em(10), fill: orange }), place(bottom, inline(strong(inline`ZD`)))),
          ),
          inline`e`,
          inline`f`,
        ),
      ),
    ),
  )
}
