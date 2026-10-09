// Converted from test/suite/corpus/table-inset.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, doc, inline, pct, pt, table, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(table({ columns: 3, inset: pt(10) }, inline`A`, inline`B`, inline`C`)),
    inline(table({ columns: 3, inset: { y: pt(10) } }, inline`A`, inline`B`, inline`C`)),
    inline(table({ columns: 3, inset: { left: pt(20), rest: pt(10) } }, inline`A`, inline`B`, inline`C`)),
    inline(
      table({ columns: 2, inset: { left: pt(20), right: pt(5), top: pt(10), bottom: pt(3) } }, inline`A`, inline`B`),
    ),
    inline(
      table(
        {
          columns: 3,
          fill: (x, y) => unsafeRaw.code<any>`(if y == 0 { aqua } else { orange }).darken(x * 15%)`,
          inset: (x_2, y_2) =>
            unsafeRaw.code<any>`(left: if x == 0 { 0pt } else { 5pt }, right: if x == 0 { 5pt } else { 0pt }, y: if y == 0 { 0pt } else { 5pt })`,
        },
        inline`A`,
        inline`B`,
        inline`C`,
        inline`A`,
        inline`B`,
        inline`C`,
      ),
    ),
    inline(
      table(
        { columns: 3, inset: [pt(0), pt(5), pt(10)], fill: (x_3, unused) => aqua.darken(times(x_3, pct(15))) },
        inline`A`,
        inline`B`,
        inline`C`,
      ),
    ),
  )
}
