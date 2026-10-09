// Converted from test/suite/corpus/arguments-len.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, arguments_, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(arguments_().len(), 0),
      space,
      test(arguments_('hello').len(), 1),
      space,
      test(arguments_({ a: 'world' }).len(), 1),
      space,
      test(arguments_({ a: 'hey' }, 14).len(), 2),
      space,
      test(arguments_({ a: 2 }, 0, 1, 3).len(), 4),
    ),
  )
}
