// Converted from test/suite/corpus/table-newlines.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, fr, inline, linebreak, m, page, pt, rgb, set, table, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(70) }),
      set(table, { fill: (x, y) => unsafeRaw.code<any>`if calc.even(x + y) { rgb("aaa") }` }),
    ),
    inline(
      table(
        { columns: times([fr(1)], 3), stroke: add(pt(2), rgb('333')) },
        inline`A`,
        inline`B`,
        inline`C`,
        inline(),
        inline(),
        inline`D ${linebreak()} E ${linebreak()} F ${linebreak()} ${linebreak()} ${linebreak()} G`,
        inline`H`,
      ),
    ),
  )
}
