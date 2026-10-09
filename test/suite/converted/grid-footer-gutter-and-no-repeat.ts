// Converted from test/suite/corpus/grid-footer-gutter-and-no-repeat.typ by scripts/convert-suite.ts — do not edit.
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
  pt,
  range,
  red,
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
      set(page, { width: auto, height: em(16) }),
      set(text, { size: pt(6) }),
      set(table, { inset: pt(2), stroke: pt(0.5) }),
      inline(
        table(
          { columns: 5, gutter: pt(2), align: add(center, horizon) },
          table.header(
            table.cell({ colspan: 5 }, inline(strong(inline`Cool Zone`))),
            table.cell({ stroke: red }, inline(strong(inline`Name`))),
            table.cell({ stroke: aqua }, inline(strong(inline`Number`))),
            inline(strong(inline`Data 1`)),
            inline(strong(inline`Data 2`)),
            inline(strong(inline`Etc`)),
            table.hline({ start: 2, end: 3, stroke: yellow }),
          ),
          spread(
            range(0, 5)
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
          table.footer(
            { repeat: false },
            table.hline({ start: 2, end: 3, stroke: yellow }),
            table.cell({ stroke: red }, inline(strong(inline`Name`))),
            table.cell({ stroke: aqua }, inline(strong(inline`Number`))),
            inline(strong(inline`Data 1`)),
            inline(strong(inline`Data 2`)),
            inline(strong(inline`Etc`)),
            table.cell({ colspan: 5 }, inline(strong(inline`Cool Zone`))),
          ),
        ),
      ),
    ),
  )
}
