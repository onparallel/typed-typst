// Converted from test/suite/corpus/grid-rtl-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  center,
  doc,
  grid,
  inline,
  orange,
  pct,
  pt,
  rtl,
  set,
  strong,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    set(text, { dir: rtl }),
    inline(
      grid(
        {
          columns: 4,
          fill: (x, y) => unsafeRaw.code<any>`if calc.odd(x + y) { blue.lighten(50%) } else { blue.lighten(10%) }`,
          inset: pt(5),
          align: center,
        },
        grid.cell({ rowspan: 2, fill: orange }, inline(strong(inline`Left`))),
        inline`Right A`,
        inline`Right A`,
        inline`Right A`,
        inline`Right B`,
        grid.cell({ colspan: 2, rowspan: 2, fill: orange.darken(pct(10)) }, inline`B Wide`),
        inline`Left A`,
        inline`Left A`,
        inline`Left B`,
        inline`Left B`,
        grid.cell({ colspan: 2, rowspan: 3, fill: orange }, inline`Wide and Long`),
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
        table.cell({ rowspan: 2, fill: orange }, inline(strong(inline`Left`))),
        inline`Right A`,
        inline`Right A`,
        inline`Right A`,
        inline`Right B`,
        table.cell({ colspan: 2, rowspan: 2, fill: orange.darken(pct(10)) }, inline`B Wide`),
        inline`Left A`,
        inline`Left A`,
        inline`Left B`,
        inline`Left B`,
        table.cell({ colspan: 2, rowspan: 3, fill: orange }, inline`Wide and Long`),
      ),
    ),
  )
}
