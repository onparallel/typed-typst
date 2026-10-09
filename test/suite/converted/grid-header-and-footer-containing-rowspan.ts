// Converted from test/suite/corpus/grid-header-and-footer-containing-rowspan.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  auto,
  block,
  context,
  counter,
  doc,
  em,
  inline,
  let_,
  lorem,
  m,
  page,
  set,
  space,
  table,
  yellow,
} from '../../../src/index.ts'

export default () => {
  const [countDecl, count] = let_('count', counter('g'))
  return doc(
    set(page, { height: em(14), width: auto }),
    m.lines(
      countDecl,
      inline(
        table(
          { rows: [auto, em(2), auto, auto] },
          table.header(
            inline`eeec`,
            table.cell(
              { rowspan: 2 },
              add(
                count.step(),
                context((ctx) => count.display(ctx)),
              ),
            ),
          ),
          inline`d`,
          block({ width: em(5), fill: yellow }, lorem(7)),
          inline`d`,
          table.footer(
            inline`eeec`,
            table.cell(
              { rowspan: 2 },
              add(
                count.step(),
                context((ctx_2) => count.display(ctx_2)),
              ),
            ),
          ),
        ),
        space,
        context((ctx_3) => count.display(ctx_3)),
      ),
    ),
  )
}
