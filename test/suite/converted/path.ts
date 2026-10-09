// Converted from test/suite/corpus/path.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, path, repr } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(repr(path('hi/there.txt')), 'path("/tests/suite/foundations/hi/there.txt")')))
}
