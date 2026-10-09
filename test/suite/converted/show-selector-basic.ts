// Converted from test/suite/corpus/show-selector-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, list, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    show(list, (it, ctx) => unsafeRaw.code<any>`"(" + it.children.map(v => v.body).join(", ") + ")"`),
    m.list(m.item(m.lines('A', m.list(m.item(['B']), m.item(['C'])))), m.item(['D']), m.item(['E'])),
  )
}
