// Converted from test/suite/corpus/destructuring-assign-commas.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [arrayDecl, array_2] = let_('array', data([1, 2, 3]))
  const [arrayDecl_2, array_3] = let_('array', data([1, 2, 3]))
  const [arrayDecl_3, array_4] = let_('array', data([1, 2, 3]))
  const [arrayDecl_4, array_5] = let_('array', data([1, 2, 3]))
  return doc(
    m.lines(
      arrayDecl,
      inline(unsafeRaw.code<any>`((key: array.at(1)) = (key: "hi"))`, space, test(array_2, [1, 'hi', 3])),
    ),
    m.lines(arrayDecl_2, inline(unsafeRaw.code<any>`((array.at(1)) = ("hi"))`, space, test(array_3, [1, 'hi', 3]))),
    m.lines(arrayDecl_3, inline(unsafeRaw.code<any>`((array.at(1),) = ("hi",))`, space, test(array_4, [1, 'hi', 3]))),
    m.lines(arrayDecl_4, inline(unsafeRaw.code<any>`((array.at(1)) = ("hi",))`, space, test(array_5, [1, ['hi'], 3]))),
  )
}
