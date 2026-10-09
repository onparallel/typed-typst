// Converted from test/suite/corpus/lower-and-upper.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, lower, m, space, upper } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [memesDecl, memes] = let_('memes', 'ArE mEmEs gReAt?')
  return doc(
    m.lines(
      memesDecl,
      inline(
        test(lower(memes), 'are memes great?'),
        space,
        test(upper(memes), 'ARE MEMES GREAT?'),
        space,
        test(upper('Ελλάδα'), 'ΕΛΛΆΔΑ'),
      ),
    ),
  )
}
