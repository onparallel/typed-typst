// Converted from test/suite/corpus/decimal-scale-is-observable.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, decimal, define, doc, inline, m, space, str } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const f1 = define('f1')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => str(p['x']))
  const f2 = define('f2')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => f1(p['x']))
  return doc(
    m.lines(
      f1.decl,
      f2.decl,
      inline(test(f2(decimal('3.140')), '3.140'), space, test(f2(decimal('3.14000')), '3.14000')),
    ),
  )
}
