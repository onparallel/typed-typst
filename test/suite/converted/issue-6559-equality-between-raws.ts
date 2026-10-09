// Converted from test/suite/corpus/issue-6559-equality-between-raws.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, assert, define, doc, inline, raw, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(raw('foo'), raw('foo')), space, assert.ne(raw('foo'), raw('bar'))))
}
