// Converted from test/suite/corpus/grid-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, center, data, doc, fr, grid, inline, left, m, right, set } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid({ columns: 3, align: left }, inline`Hello`, inline`Hello`, inline`Hello`, inline`A`, inline`B`, inline`C`),
    ),
    inline(
      grid(
        { columns: 3, align: (x, y) => data([left, center, right]).at(x) },
        inline`Hello`,
        inline`Hello`,
        inline`Hello`,
        inline`A`,
        inline`B`,
        inline`C`,
      ),
    ),
    inline(grid({ columns: [fr(1), fr(1), fr(1)], align: [left, center, right] }, inline`A`, inline`B`, inline`C`)),
    m.lines(
      set(align, { alignment: center }),
      inline(grid({ columns: [fr(1), fr(1), fr(1)], align: [] }, inline`A`, inline`B`, inline`C`)),
    ),
    'a',
  )
}
