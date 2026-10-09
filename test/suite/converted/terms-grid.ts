// Converted from test/suite/corpus/terms-grid.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, pt, show, spread, table, terms, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    show(terms, (it, ctx) =>
      table(
        { columns: 2, inset: pt(3) },
        spread(unsafeRaw.code<any>`it.children.map(v => (emph(v.term), v.description)).flatten()`),
      ),
    ),
    m.terms(m.term(['A'], ['One letter']), m.term(['BB'], ['Two letters']), m.term(['CCC'], ['Three letters'])),
  )
}
