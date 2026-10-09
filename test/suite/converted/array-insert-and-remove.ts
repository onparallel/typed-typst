// Converted from test/suite/corpus/array-insert-and-remove.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, data, define, doc, inline, let_, range, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [arrayDecl, array_2] = let_('array', data([0, 1, 2, 4, 5]))
  return doc(
    inline(
      codeBlock([
        arrayDecl,
        array_2.insert(3, 3),
        test(array_2, range(6)),
        unsafeRaw.code<any>`_ = array.remove(1)`,
        test(array_2, [0, 2, 3, 4, 5]),
      ]),
    ),
  )
}
