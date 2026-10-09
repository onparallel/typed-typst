// Converted from test/suite/corpus/table-cell-folding.typ by scripts/convert-suite.ts — do not edit.
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
  inline,
  pt,
  right,
  table,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        {
          columns: [fr(1), fr(1)],
          rows: [em(2.5), auto],
          align: right,
          fill: (x, y) => data([green, aqua]).at(assume<'int'>(calc.rem(add(x, y), 2))),
        },
        inline`Top`,
        table.cell({ align: bottom }, inline`Bot`),
        table.cell({ inset: { bottom: pt(0) } }, inline`Bot`),
        table.cell({ inset: { bottom: pt(0) } }, inline`Bot`),
      ),
    ),
  )
}
