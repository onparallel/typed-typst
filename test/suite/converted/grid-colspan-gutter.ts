// Converted from test/suite/corpus/grid-colspan-gutter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { center, doc, grid, inline, orange, pct, pt, strong, table, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        {
          columns: 4,
          fill: (x, y) => unsafeRaw.code<any>`if calc.odd(x + y) { blue.lighten(50%) } else { blue.lighten(10%) }`,
          inset: pt(5),
          align: center,
          gutter: pt(3),
        },
        grid.cell({ colspan: 4 }, inline(strong(inline`Full Header`))),
        grid.cell({ colspan: 2, fill: orange }, inline(strong(inline`Half`))),
        grid.cell({ colspan: 2, fill: orange.darken(pct(10)) }, inline(strong(inline`Half`))),
        inline(strong(inline`A`)),
        inline(strong(inline`B`)),
        inline(strong(inline`C`)),
        inline(strong(inline`D`)),
        inline`1`,
        inline`2`,
        inline`3`,
        inline`4`,
        inline`5`,
        grid.cell({ colspan: 3, fill: orange.darken(pct(10)) }, inline`6`),
        grid.cell({ colspan: 2, fill: orange }, inline`7`),
        inline`8`,
        inline`9`,
        inline`10`,
        grid.cell({ colspan: 2, fill: orange.darken(pct(10)) }, inline`11`),
        inline`12`,
      ),
    ),
    inline(
      table(
        {
          columns: 4,
          fill: (x_2, y_2) => unsafeRaw.code<any>`if calc.odd(x + y) { blue.lighten(50%) } else { blue.lighten(10%) }`,
          inset: pt(5),
          align: center,
          gutter: pt(3),
        },
        table.cell({ colspan: 4 }, inline(strong(inline`Full Header`))),
        table.cell({ colspan: 2, fill: orange }, inline(strong(inline`Half`))),
        table.cell({ colspan: 2, fill: orange.darken(pct(10)) }, inline(strong(inline`Half`))),
        inline(strong(inline`A`)),
        inline(strong(inline`B`)),
        inline(strong(inline`C`)),
        inline(strong(inline`D`)),
        inline`1`,
        inline`2`,
        inline`3`,
        inline`4`,
        inline`5`,
        table.cell({ colspan: 3, fill: orange.darken(pct(10)) }, inline`6`),
        table.cell({ colspan: 2, fill: orange }, inline`7`),
        inline`8`,
        inline`9`,
        inline`10`,
        table.cell({ colspan: 2, fill: orange.darken(pct(10)) }, inline`11`),
        inline`12`,
      ),
    ),
  )
}
