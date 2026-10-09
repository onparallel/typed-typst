// Converted from test/suite/corpus/ops-attempt-nan-length.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, define, div, doc, float, inline, let_, m, minus, neg, pt, space, times } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [infptDecl, infpt] = let_('infpt', times(float('inf'), pt(1)))
  return doc(
    m.lines(
      infptDecl,
      inline(
        test(minus(infpt, infpt), pt(0)),
        space,
        test(add(infpt, neg(infpt)), pt(0)),
        space,
        test(div(infpt, float('inf')), pt(0)),
      ),
    ),
  )
}
