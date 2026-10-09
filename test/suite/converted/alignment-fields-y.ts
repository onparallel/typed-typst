// Converted from test/suite/corpus/alignment-fields-y.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bottom, define, doc, horizon, inline, space, top, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`(start + top).y`, top),
      space,
      test(unsafeRaw.code<any>`(end + top).y`, top),
      space,
      test(unsafeRaw.code<any>`(left + top).y`, top),
      space,
      test(unsafeRaw.code<any>`(right + top).y`, top),
      space,
      test(unsafeRaw.code<any>`(center + top).y`, top),
      space,
      test(unsafeRaw.code<any>`(start + bottom).y`, bottom),
      space,
      test(unsafeRaw.code<any>`(end + bottom).y`, bottom),
      space,
      test(unsafeRaw.code<any>`(left + bottom).y`, bottom),
      space,
      test(unsafeRaw.code<any>`(right + bottom).y`, bottom),
      space,
      test(unsafeRaw.code<any>`(center + bottom).y`, bottom),
      space,
      test(unsafeRaw.code<any>`(start + horizon).y`, horizon),
      space,
      test(unsafeRaw.code<any>`(end + horizon).y`, horizon),
      space,
      test(unsafeRaw.code<any>`(left + horizon).y`, horizon),
      space,
      test(unsafeRaw.code<any>`(right + horizon).y`, horizon),
      space,
      test(unsafeRaw.code<any>`(center + horizon).y`, horizon),
      space,
      test(unsafeRaw.code<any>`(top + start).y`, top),
      space,
      test(unsafeRaw.code<any>`(bottom + end).y`, bottom),
      space,
      test(unsafeRaw.code<any>`(horizon + center).y`, horizon),
    ),
  )
}
