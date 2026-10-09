// Converted from test/suite/corpus/grid-calendar.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  aqua,
  auto,
  bottom,
  codeBlock,
  doc,
  grid,
  inline,
  m,
  orange,
  page,
  pct,
  pt,
  red,
  set,
  show,
  spread,
  times,
  unsafeRaw,
  yellow,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      show(
        grid.cell,
        (it, ctx) => unsafeRaw.code<any>`{
  if it.y == 0 {
    set text(white)
    strong(it)
  } else {
    // For the second row and beyond, we will write the day number for each
    // cell.

    // In general, a cell's index is given by cell.x + columns * cell.y.
    // Days start in the second grid row, so we subtract 1 row.
    // But the first day is day 1, not day 0, so we add 1.
    let day = it.x + 7 * (it.y - 1) + 1
    if day <= 31 {
      // Place the day's number at the top left of the cell.
      // Only if the day is valid for this month (not 32 or higher).
      place(top + left, dx: 2pt, dy: 2pt, text(8pt, red.darken(40%))[#day])
    }
    it
  }
}`,
      ),
    ),
    inline(
      grid(
        {
          fill: (x, y) => unsafeRaw.code<any>`if y == 0 { gray.darken(50%) }`,
          columns: times([pt(30)], 7),
          rows: [auto, pt(30)],
          align: bottom,
          inset: pt(5),
          stroke: { thickness: pt(0.5), dash: 'densely-dotted' },
        },
        inline`Sun`,
        inline`Mon`,
        inline`Tue`,
        inline`Wed`,
        inline`Thu`,
        inline`Fri`,
        inline`Sat`,
        grid.cell({ x: 5, fill: yellow.darken(pct(10)) }, inline`Call`),
        spread(times([grid.cell({ x: 1, fill: red.lighten(pct(50)) }, inline`Meet`)], 5)),
        grid.cell({ x: 4, y: 3, fill: orange.lighten(pct(25)) }, inline`Talk`),
        grid.cell({ y: 2, fill: aqua }, inline`Chat`),
        grid.cell({ y: 2, fill: aqua }, inline`Walk`),
      ),
    ),
  )
}
