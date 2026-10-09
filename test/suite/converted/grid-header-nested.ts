// Converted from test/suite/corpus/grid-header-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  blue,
  center,
  define,
  doc,
  em,
  green,
  grid,
  horizon,
  inline,
  m,
  page,
  pt,
  range,
  set,
  spread,
  strong,
  table,
} from '../../../src/index.ts'

export default () => {
  const t = define('t')
    .pos('n', T.any)
    .returns(T.any)
    .body((p) =>
      table(
        { columns: 3, align: add(center, horizon), gutter: pt(3) },
        table.header(
          table.cell({ colspan: 3 }, inline(strong(inline`Cool Zone ${p['n']}`))),
          inline(strong(inline`Name`)),
          inline(strong(inline`Num`)),
          inline(strong(inline`Data`)),
        ),
        spread(
          range(0, 5)
            .map((i) => [
              inline`#${i}`,
              table.cell({ stroke: green }, inline`123`),
              table.cell({ stroke: blue }, inline`456`),
            ])
            .flatten(),
        ),
      ),
    )
  return doc(m.lines(set(page, { height: em(14) }), t.decl, inline(grid({ gutter: pt(3) }, t(0), t(1)))))
}
