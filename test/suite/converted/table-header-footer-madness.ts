// Converted from test/suite/corpus/table-header-footer-madness.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, counter, doc, inline, let_, m, page, pt, set, table, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [cDecl, c] = let_('c', counter('c'))
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      cDecl,
      unsafeRaw.markup`#let it = context c.get().first() * v(10pt)`,
      inline(
        table(
          table.header(c.step()),
          inline`A`,
          inline`A`,
          inline`A`,
          inline`A`,
          inline`A`,
          inline`A`,
          inline`A`,
          table.footer(unsafeRaw.code<any>`it`),
        ),
      ),
    ),
  )
}
