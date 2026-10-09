// Converted from test/suite/corpus/query-quote.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, here, inline, label, labelled, query, quote, selector, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`${quote(inline`ABC`)} & ${quote(inline`EFG`)}`,
    inline(context((ctx) => query(ctx, selector(quote).before(here(ctx))).first())),
    inline(quote({ block: true }, inline`HIJ`), space, quote({ block: true }, inline`KLM`)),
    inline(context((ctx_2) => query(ctx_2, selector(quote).before(here(ctx_2))).last())),
    inline(labelled([quote(inline`NOP`), space], label('nop'))),
    inline(context((ctx_3) => query(ctx_3, label('nop')).first())),
  )
}
