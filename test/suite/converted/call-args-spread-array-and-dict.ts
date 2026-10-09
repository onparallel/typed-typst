// Converted from test/suite/corpus/call-args-spread-array-and-dict.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, codeBlock, data, define, doc, inline, let_, repr, spread, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [moreDecl, more] = let_('more', data([3, -3, 6, 10]))
  const [moreDecl_2, more_2] = let_('more', { c: 3, d: 4 })
  const tostr = define('tostr')
    .rest('args', T.any)
    .returns(T.any)
    .body((p) => repr(p['args']))
  return doc(
    inline(
      codeBlock([
        moreDecl,
        test(calc.min(1, 2, spread(more)), -3),
        test(calc.max(spread(more), 9), 10),
        test(calc.max(spread(more), 11), 11),
      ]),
    ),
    inline(
      codeBlock([
        moreDecl_2,
        tostr.decl,
        test(unsafeRaw.code<any>`tostr(a: 1, ..more, b: 2)`, 'arguments(a: 1, c: 3, d: 4, b: 2)'),
      ]),
    ),
  )
}
