// Converted from test/suite/corpus/dict-basic-methods.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dictDecl, dict_2] = let_('dict', { a: 3, c: 2, b: 1 })
  return doc(
    m.lines(
      dictDecl,
      inline(
        test(unsafeRaw.code<any>`"c" in dict`, true),
        space,
        test(dict_2.len(), 3),
        space,
        test(dict_2.values(), [3, 2, 1]),
        space,
        test(
          dict_2
            .pairs()
            .map(unsafeRaw.code<any>`p => p.first() + str(p.last())`)
            .join(),
          'a3c2b1',
        ),
      ),
    ),
    inline(
      test(dict_2.remove('c'), 2),
      space,
      test(unsafeRaw.code<any>`"c" in dict`, false),
      space,
      test(dict_2, { a: 3, b: 1 }),
    ),
  )
}
