// Converted from test/suite/corpus/state-multiple-calls-same-key.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, context, doc, inline, space, state } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      context((ctx) => state('key', 2).get(ctx)),
      space,
      state('key').update((x) => add(x, 1)),
      space,
      context((ctx_2) => state('key', 2).get(ctx_2)),
      space,
      context((ctx_3) => state('key', 3).get(ctx_3)),
      space,
      state('key').update((x_2) => add(x_2, 1)),
      space,
      context((ctx_4) => state('key', 2).get(ctx_4)),
    ),
  )
}
