// Converted from test/suite/corpus/alignment-fields-x.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, center, define, doc, end, inline, left, right, space, start, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`(start + top).x`, start),
      space,
      test(unsafeRaw.code<any>`(end + top).x`, end),
      space,
      test(unsafeRaw.code<any>`(left + top).x`, left),
      space,
      test(unsafeRaw.code<any>`(right + top).x`, right),
      space,
      test(unsafeRaw.code<any>`(center + top).x`, center),
      space,
      test(unsafeRaw.code<any>`(start + bottom).x`, start),
      space,
      test(unsafeRaw.code<any>`(end + bottom).x`, end),
      space,
      test(unsafeRaw.code<any>`(left + bottom).x`, left),
      space,
      test(unsafeRaw.code<any>`(right + bottom).x`, right),
      space,
      test(unsafeRaw.code<any>`(center + bottom).x`, center),
      space,
      test(unsafeRaw.code<any>`(start + horizon).x`, start),
      space,
      test(unsafeRaw.code<any>`(end + horizon).x`, end),
      space,
      test(unsafeRaw.code<any>`(left + horizon).x`, left),
      space,
      test(unsafeRaw.code<any>`(right + horizon).x`, right),
      space,
      test(unsafeRaw.code<any>`(center + horizon).x`, center),
      space,
      test(unsafeRaw.code<any>`(top + start).x`, start),
      space,
      test(unsafeRaw.code<any>`(bottom + end).x`, end),
      space,
      test(unsafeRaw.code<any>`(horizon + center).x`, center),
    ),
  )
}
