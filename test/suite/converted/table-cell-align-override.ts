// Converted from test/suite/corpus/table-cell-align-override.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  aqua,
  auto,
  bottom,
  doc,
  em,
  fr,
  green,
  inline,
  left,
  m,
  pct,
  red,
  right,
  set,
  table,
  top,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(align, { alignment: add(bottom, right) }),
      inline(
        table(
          { columns: [fr(1), fr(1)], rows: em(2), align: auto, fill: green },
          inline`BR`,
          inline`BR`,
          table.cell({ align: left, fill: aqua }, inline`BL`),
          table.cell({ align: top, fill: red.lighten(pct(50)) }, inline`TR`),
        ),
      ),
    ),
  )
}
