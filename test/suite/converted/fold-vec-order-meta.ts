// Converted from test/suite/corpus/fold-vec-order-meta.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, counter, doc, inline, let_, linebreak, m, space } from '../../../src/index.ts'

export default () => {
  const [cDecl, c] = let_('c', counter('mycounter'))
  return doc(
    m.lines(cDecl, inline(c.update(1))),
    inline(
      context(
        (ctx) =>
          inline`${space}${c.update(2)} ${c.get(ctx)} ${linebreak()} Second: ${context((ctx_2) => c.get(ctx_2))}${space}`,
      ),
    ),
  )
}
