// Converted from test/suite/corpus/ops-binary-decimal-multiplication-division-imprecision.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, decimal, define, div, doc, inline, space, times } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(div(decimal('0.7777777777777777777777777777'), 1000), decimal('0.0007777777777777777777777778')),
      space,
      test(
        times(decimal('0.7777777777777777777777777777'), decimal('0.001')),
        decimal('0.0007777777777777777777777778'),
      ),
    ),
  )
}
