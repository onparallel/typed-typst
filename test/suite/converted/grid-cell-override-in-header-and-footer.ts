// Converted from test/suite/corpus/grid-cell-override-in-header-and-footer.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, doc, inline, red, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        table.header(table.cell({ stroke: red }, inline`Hello`)),
        table.footer(table.cell({ stroke: aqua }, inline`Bye`)),
      ),
    ),
  )
}
