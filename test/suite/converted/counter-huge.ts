// Converted from test/suite/corpus/counter-huge.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, context, counter, define, doc, inline, let_, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [cDecl, c] = let_('c', counter('c'))
  return doc(
    m.lines(
      cDecl,
      inline(
        c.update(100000000001),
        space,
        context((ctx) => test(c.get(ctx), [100000000001])),
        space,
        c.step(),
        space,
        context((ctx_2) => test(c.get(ctx_2), [100000000002])),
        space,
        c.update((n) => add(n, 2)),
        space,
        context((ctx_3) => test(c.get(ctx_3), [100000000004])),
      ),
    ),
  )
}
