// Converted from test/suite/corpus/grid-subheaders-colorful.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  aqua,
  auto,
  blue,
  center,
  codeBlock,
  define,
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
  const rows = define('rows')
    .pos('n', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        range(p['n'])
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
    )
  return doc(
    m.lines(
      set(page, { width: auto, height: em(12) }),
      rows.decl,
      inline(
        table(
          { columns: 5, align: add(center, horizon) },
          table.header(table.cell({ colspan: 5 }, inline(strong(inline`Cool Zone`)))),
          table.header(
            { level: 2 },
            table.cell({ stroke: red }, inline(strong(inline`Name`))),
            table.cell({ stroke: aqua }, inline(strong(inline`Number`))),
            inline(strong(inline`Data 1`)),
            inline(strong(inline`Data 2`)),
            inline(strong(inline`Etc`)),
            table.hline({ start: 2, end: 3, stroke: yellow }),
          ),
          spread(rows(2)),
          table.header(
            { level: 2 },
            table.cell({ stroke: red }, inline(strong(inline`New Name`))),
            table.cell({ stroke: aqua, colspan: 4 }, inline(strong(inline`Other Data`))),
            table.hline({ start: 2, end: 3, stroke: yellow }),
          ),
          spread(rows(3)),
        ),
      ),
    ),
  )
}
