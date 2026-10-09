// Converted from test/suite/corpus/show-multiple-rules.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, enum_, heading, inline, left, list, m, pct, scale, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(list, scale.with({ origin: left, x: pct(80) })),
      show(heading, inline()),
      show(enum_, inline()),
      m.list(m.item(['Actual']), m.item(['Tight']), m.item(['List'])),
      m.heading(1, 'Nope'),
    ),
  )
}
