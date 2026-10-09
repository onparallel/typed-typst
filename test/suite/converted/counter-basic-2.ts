// Converted from test/suite/corpus/counter-basic-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, context, counter, define, doc, here, inline, let_, m, minus, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [cDecl, c] = let_('c', counter('heading'))
  return doc(
    m.lines(
      cDecl,
      inline(
        c.update(2),
        space,
        c.update((n) => add(n, 2)),
        space,
        context((ctx) => test(c.get(ctx), [4])),
        space,
        c.update((n_2) => minus(n_2, 3)),
        space,
        context((ctx_2) => test(c.at(ctx_2, here(ctx_2)), [1])),
      ),
    ),
  )
}
