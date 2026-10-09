// Converted from test/suite/corpus/grid-cell-position-partial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, auto, doc, em, green, grid, inline, orange, pt, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 3, rows: em(1.5), inset: pt(5), fill: aqua },
        inline`A`,
        grid.cell({ y: 1, fill: green }, inline`B`),
        inline`C`,
        grid.cell({ x: auto, y: 1, fill: green }, inline`D`),
        inline`E`,
        grid.cell({ y: 2, fill: green }, inline`F`),
        grid.cell({ x: 0, fill: orange }, inline`G`),
        grid.cell({ x: 0, y: auto, fill: orange }, inline`H`),
        grid.cell({ x: 1, fill: orange }, inline`I`),
      ),
    ),
    inline(
      table(
        { columns: 3, rows: em(1.5), inset: pt(5), fill: aqua },
        inline`A`,
        table.cell({ y: 1, fill: green }, inline`B`),
        inline`C`,
        table.cell({ x: auto, y: 1, fill: green }, inline`D`),
        inline`E`,
        table.cell({ y: 2, fill: green }, inline`F`),
        table.cell({ x: 0, fill: orange }, inline`G`),
        table.cell({ x: 0, y: auto, fill: orange }, inline`H`),
        table.cell({ x: 1, fill: orange }, inline`I`),
      ),
    ),
  )
}
