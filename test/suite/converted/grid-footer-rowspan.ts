// Converted from test/suite/corpus/grid-footer-rowspan.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, page, set, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(9) }),
      inline(
        table(
          { columns: 2 },
          inline`a`,
          inline(),
          inline`b`,
          inline(),
          inline`c`,
          inline(),
          inline`d`,
          inline(),
          inline`e`,
          inline(),
          table.footer(
            inline(strong(inline`Ok`)),
            table.cell({ rowspan: 2 }, inline`test`),
            inline(strong(inline`Thanks`)),
          ),
        ),
      ),
    ),
  )
}
