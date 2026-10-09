// Converted from test/suite/corpus/grid-rtl-header.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  aqua,
  blue,
  center,
  doc,
  em,
  green,
  horizon,
  inline,
  m,
  page,
  range,
  red,
  rtl,
  set,
  spread,
  strong,
  table,
  text,
  yellow,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(15) }),
      set(text, { dir: rtl }),
      inline(
        table(
          { columns: 5, align: add(center, horizon) },
          table.header(
            table.cell({ colspan: 5 }, inline(strong(inline`Cool Zone`))),
            table.cell({ stroke: red }, inline(strong(inline`N1`))),
            table.cell({ stroke: aqua }, inline(strong(inline`N2`))),
            inline(strong(inline`D1`)),
            inline(strong(inline`D2`)),
            inline(strong(inline`Etc`)),
            table.hline({ start: 2, end: 3, stroke: yellow }),
          ),
          spread(
            range(0, 10)
              .map((i) => [
                inline`#${i}`,
                table.cell({ stroke: green }, inline`123`),
                table.cell({ stroke: blue }, inline`456`),
                inline`789`,
                inline`?`,
                table.hline({ start: 4, end: 5, stroke: red }),
              ])
              .flatten(),
          ),
        ),
      ),
    ),
  )
}
