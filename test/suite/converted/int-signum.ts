// Converted from test/suite/corpus/int-signum.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, float, inline, int, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(int(0).signum(), 0),
      space,
      test(int(float(1)).signum(), 1),
      space,
      test(int(float(-1)).signum(), -1),
      space,
      test(int(float(10)).signum(), 1),
      space,
      test(int(float(-10)).signum(), -1),
    ),
  )
}
