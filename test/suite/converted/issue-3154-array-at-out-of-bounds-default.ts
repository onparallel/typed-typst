// Converted from test/suite/corpus/issue-3154-array-at-out-of-bounds-default.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, data, define, doc, inline, let_ } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [arrayDecl, array_2] = let_('array', data([1]))
  return doc(inline(codeBlock([arrayDecl, test(array_2.at({ default: 0 }, 1), 0)])))
}
