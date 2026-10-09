// Converted from test/suite/corpus/grid-exam.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  aqua,
  auto,
  codeBlock,
  data,
  doc,
  green,
  inline,
  m,
  page,
  set,
  show,
  spread,
  table,
  times,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      show(
        table.cell,
        (it, ctx) => unsafeRaw.code<any>`{
  if it.x == 0 or it.y == 0 {
    set text(white)
    strong(it)
  } else if it.body == [] {
    // Replace empty cells with 'N/A'
    pad(rest: it.inset)[_N/A_]
  } else {
    it
  }
}`,
      ),
    ),
    inline(
      table(
        { fill: (x, y) => unsafeRaw.code<any>`if x == 0 or y == 0 { gray.darken(50%) }`, columns: 4 },
        inline(),
        inline`Exam 1`,
        inline`Exam 2`,
        inline`Exam 3`,
        spread(data([inline`John`, inline`Mary`, inline`Jake`, inline`Robert`]).map(table.cell.with({ x: 0 }))),
        table.cell({ x: 3, y: 2, fill: green }, inline`A`),
        spread(times([table.cell({ x: 2, fill: green }, inline`A`)], 4)),
        spread(times([table.cell({ y: 4, fill: aqua }, inline`B`)], 2)),
      ),
    ),
  )
}
