// Converted from test/suite/corpus/table-header-counter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, context, counter, doc, inline, let_, m, page, pt, set, table } from '../../../src/index.ts'

export default () => {
  const [cDecl, c] = let_('c', counter('c'))
  return doc(
    m.lines(
      set(page, { height: pt(60) }),
      cDecl,
      inline(
        table(
          table.header(
            add(
              c.step(),
              context((ctx) => c.display(ctx)),
            ),
          ),
          inline`A`,
          inline`A`,
        ),
      ),
    ),
  )
}
