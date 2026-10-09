// Converted from test/suite/corpus/grid-header-and-footer-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
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
  set,
  spread,
  table,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8) }),
      inline(
        table(
          { columns: 4, align: add(center, horizon) },
          table.header(),
          spread(
            range(0, 2)
              .map((i) => [
                inline`John #${i}`,
                table.cell({ stroke: green }, inline`123`),
                table.cell({ stroke: blue }, inline`456`),
                inline`789`,
              ])
              .flatten(),
          ),
          table.footer(),
        ),
      ),
    ),
  )
}
