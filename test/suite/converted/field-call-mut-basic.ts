// Converted from test/suite/corpus/field-call-mut-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, let_, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [numbersDecl, numbers] = let_('numbers', data([1, 2, 3]))
  return doc(m.lines(numbersDecl, inline(test(numbers.remove(1), 2), space, test(numbers, [1, 3]))))
}
