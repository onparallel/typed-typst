// Converted from test/suite/corpus/grid-cell-folding.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  aqua,
  assume,
  auto,
  bottom,
  calc,
  data,
  doc,
  em,
  fr,
  green,
  grid,
  inline,
  pt,
  right,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        {
          columns: [fr(1), fr(1)],
          rows: [em(2.5), auto],
          align: right,
          inset: pt(5),
          fill: (x, y) => data([green, aqua]).at(assume<'int'>(calc.rem(add(x, y), 2))),
        },
        inline`Top`,
        grid.cell({ align: bottom }, inline`Bot`),
        grid.cell({ inset: { bottom: pt(0) } }, inline`Bot`),
        grid.cell({ inset: { bottom: pt(0) } }, inline`Bot`),
      ),
    ),
  )
}
