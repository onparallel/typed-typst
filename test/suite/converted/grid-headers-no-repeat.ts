// Converted from test/suite/corpus/grid-headers-no-repeat.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  aqua,
  auto,
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
  set,
  spread,
  strong,
  table,
  yellow,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto, height: em(12) }),
      inline(
        table(
          { columns: 5, align: add(center, horizon) },
          table.header(
            { repeat: false },
            table.cell({ colspan: 5 }, inline(strong(inline`Cool Zone`))),
            table.cell({ stroke: red }, inline(strong(inline`Name`))),
            table.cell({ stroke: aqua }, inline(strong(inline`Number`))),
            inline(strong(inline`Data 1`)),
            inline(strong(inline`Data 2`)),
            inline(strong(inline`Etc`)),
            table.hline({ start: 2, end: 3, stroke: yellow }),
          ),
          spread(
            range(0, 6)
              .map((i) => [
                inline`John #${i}`,
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
