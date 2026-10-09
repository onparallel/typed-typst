// Converted from test/suite/corpus/issue-4626-counter-depth-skip.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, counter, define, doc, inline, let_, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [cDecl, c] = let_('c', counter('c'))
  return doc(
    m.lines(
      cDecl,
      inline(
        context((ctx) => test(c.get(ctx), [0])),
        space,
        c.step({ level: 4 }),
        space,
        context((ctx_2) => test(c.get(ctx_2), [0, 0, 0, 1])),
        space,
        c.step({ level: 1 }),
        space,
        context((ctx_3) => test(c.get(ctx_3), [1])),
        space,
        c.step({ level: 3 }),
        space,
        context((ctx_4) => test(c.get(ctx_4), [1, 0, 1])),
      ),
    ),
  )
}
