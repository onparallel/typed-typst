// Converted from test/suite/corpus/issue-2747-repr-auto-none.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, auto, define, doc, inline, repr, space, type } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(repr(null), 'none'),
      space,
      test(repr(auto), 'auto'),
      space,
      test(repr(type(null)), 'type(none)'),
      space,
      test(repr(type(auto)), 'type(auto)'),
    ),
  )
}
