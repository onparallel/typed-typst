// Converted from test/suite/corpus/grid-stroke-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, blue, doc, green, inline, pt, red, table, yellow } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 3 },
        inline`a`,
        table.cell({ colspan: 2 }, inline`b c`),
        table.cell({ stroke: blue }, inline`d`),
        inline`e`,
        inline`f`,
        inline`g`,
        inline`h`,
        table.cell({ stroke: { left: yellow, top: green, right: aqua, bottom: red } }, inline`i`),
        inline`j`,
        inline`k`,
        inline`l`,
        table.cell({ stroke: pt(3) }, inline`m`),
        inline`n`,
        table.cell({ stroke: { dash: 'loosely-dotted' } }, inline`o`),
      ),
    ),
  )
}
