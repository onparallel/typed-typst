// Converted from test/suite/corpus/show-recursive-multiple.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, blue, doc, list, m, pt, rect, red, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(rect, { inset: pt(3) }),
      show(list, rect.with({ stroke: blue })),
      show(list, rect.with({ stroke: red })),
      show(list, block),
    ),
    m.list(m.item(m.lines('List', m.list(m.item(['Nested']), m.item(['List'])))), m.item(['Recursive!'])),
  )
}
