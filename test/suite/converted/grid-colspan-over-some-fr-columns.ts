// Converted from test/suite/corpus/grid-colspan-over-some-fr-columns.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, fr, inline, lorem, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: [fr(1), fr(1), auto] },
        inline(),
        table.cell({ colspan: 2 }, lorem(8)),
        inline`A`,
        inline`B`,
        inline`C`,
        inline`D`,
        inline`E`,
        inline`F`,
      ),
    ),
  )
}
