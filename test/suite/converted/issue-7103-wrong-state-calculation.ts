// Converted from test/suite/corpus/issue-7103-wrong-state-calculation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  codeBlock,
  context,
  define,
  doc,
  grid,
  inline,
  let_,
  lorem,
  minus,
  page,
  set,
  state,
} from '../../../src/index.ts'

export default () => {
  const [stDecl, st] = let_('st', state('st', 0))
  const fn = define('fn')
    .returns(T.any)
    .body((p) => codeBlock([st.update((i) => add(i, 1)), lorem(11), st.update((i_2) => minus(i_2, 1))]))
  return doc(
    set(page, { paper: 'a10' }),
    stDecl,
    fn.decl,
    inline(grid(fn())),
    inline(fn()),
    inline`Result: ${context((ctx) => st.get(ctx))}`,
  )
}
