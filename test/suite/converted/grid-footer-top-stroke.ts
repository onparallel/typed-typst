// Converted from test/suite/corpus/grid-footer-top-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, green, inline, m, page, red, set, table, yellow } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(10) }),
      inline(
        table(
          { stroke: green },
          table.header(table.cell({ stroke: red }, inline`Hello`)),
          table.cell({ stroke: yellow }, inline`Hi`),
          table.cell({ stroke: yellow }, inline`Bye`),
          table.cell({ stroke: yellow }, inline`Ok`),
          table.footer(inline`Bye`),
        ),
      ),
    ),
  )
}
