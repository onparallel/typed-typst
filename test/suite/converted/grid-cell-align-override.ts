// Converted from test/suite/corpus/grid-cell-align-override.typ by scripts/convert-suite.ts — do not edit.
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
  grid,
  inline,
  left,
  m,
  pct,
  red,
  right,
  set,
  top,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(align, { alignment: add(bottom, right) }),
      inline(
        grid(
          { columns: [fr(1), fr(1)], rows: em(2), align: auto, fill: green },
          inline`BR`,
          inline`BR`,
          grid.cell({ align: left, fill: aqua }, inline`BL`),
          grid.cell({ align: top, fill: red.lighten(pct(50)) }, inline`TR`),
        ),
      ),
    ),
  )
}
