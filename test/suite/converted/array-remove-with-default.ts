// Converted from test/suite/corpus/array-remove-with-default.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, data, define, doc, inline, let_ } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [arrayDecl, array_2] = let_('array', data([1, 2, 3]))
  const [arrayDecl_2, array_3] = let_('array', data([1, 2, 3]))
  return doc(
    inline(codeBlock([arrayDecl, test(array_2.remove({ default: 5 }, 2), 3)])),
    inline(codeBlock([arrayDecl_2, test(array_3.remove({ default: 5 }, 3), 5)])),
  )
}
