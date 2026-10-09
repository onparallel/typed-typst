// Converted from test/suite/corpus/grid-stroke-priority-cell.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { black, doc, inline, red, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table({ columns: 2, stroke: black }, table.cell({ stroke: red }, inline`a`), inline`b`, inline`c`, inline`d`),
    ),
    inline(table({ columns: 2 }, table.cell({ stroke: red }, inline`a`), inline`b`, inline`c`, inline`d`)),
  )
}
