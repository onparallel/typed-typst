// Converted from test/suite/corpus/counter-rtl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, auto, context, counter, doc, inline, let_, linebreak, m, page, set, space } from '../../../src/index.ts'

export default () => {
  const [cDecl, c] = let_('c', counter('c'))
  const [sDecl, s] = let_(
    's',
    context((ctx) => add(c.display(ctx), c.step())),
  )
  const [treeDecl, tree] = let_('tree', inline`درخت`)
  const [lineDecl, line_2] = let_('line', inline`A ${s} B ${tree} ${s} ${tree} ${s} ${tree} C ${s} D ${s}`)
  return doc(
    m.lines(
      set(page, { width: auto }),
      cDecl,
      sDecl,
      treeDecl,
      lineDecl,
      inline(line_2, space, linebreak(), space, line_2),
    ),
  )
}
