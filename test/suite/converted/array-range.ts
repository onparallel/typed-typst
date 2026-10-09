// Converted from test/suite/corpus/array-range.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, define, doc, inline, minus, neg, range, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(range(4), [0, 1, 2, 3]),
      space,
      test(range(1, 4), [1, 2, 3]),
      space,
      test(range(-4, 2), [-4, -3, -2, -1, 0, 1]),
      space,
      test(range(10, 5), []),
      space,
      test(range({ step: 3 }, 10), [0, 3, 6, 9]),
      space,
      test(range({ step: 1 }, 1, 4), [1, 2, 3]),
      space,
      test(range({ step: 2 }, 1, 8), [1, 3, 5, 7]),
      space,
      test(range({ step: -1 }, 5, 2), [5, 4, 3]),
      space,
      test(range({ step: -3 }, 10, 0), [10, 7, 4, 1]),
    ),
    inline(
      test(range({ inclusive: true }, 0, 0), [0]),
      space,
      test(range({ inclusive: true }, -10, -8), [-10, -9, -8]),
      space,
      test(range({ inclusive: true, step: 2 }, -2, 4), [-2, 0, 2, 4]),
      space,
      test(range({ inclusive: true, step: -1 }, 5, 2), [5, 4, 3, 2]),
      space,
      test(range({ inclusive: true, step: -1 }, 0, -2), [0, -1, -2]),
    ),
    inline(
      test(
        range(unsafeRaw.code<any>`int.max - 2`, unsafeRaw.code<any>`int.max`),
        unsafeRaw.code<any>`(int.max - 2, int.max - 1)`,
      ),
      space,
      test(
        range({ step: -1 }, unsafeRaw.code<any>`int.min + 2`, unsafeRaw.code<any>`int.min`),
        unsafeRaw.code<any>`(int.min + 2, -int.max)`,
      ),
      space,
      test(
        range({ inclusive: true }, unsafeRaw.code<any>`int.max - 2`, unsafeRaw.code<any>`int.max`),
        unsafeRaw.code<any>`(int.max - 2, int.max - 1, int.max)`,
      ),
      space,
      test(
        range({ inclusive: true, step: -1 }, unsafeRaw.code<any>`int.min + 2`, unsafeRaw.code<any>`int.min`),
        unsafeRaw.code<any>`(int.min + 2, -int.max, int.min)`,
      ),
    ),
    inline(
      test(range({ step: unsafeRaw.code<any>`int.max` }, 2, 3), [2]),
      space,
      test(range({ step: unsafeRaw.code<any>`int.min` }, -2, -3), [-2]),
      space,
      test(
        range({ inclusive: true, step: 2 }, unsafeRaw.code<any>`int.max - 1`, unsafeRaw.code<any>`int.max`),
        unsafeRaw.code<any>`(int.max - 1,)`,
      ),
      space,
      test(
        range({ inclusive: true, step: -2 }, unsafeRaw.code<any>`int.min + 1`, unsafeRaw.code<any>`int.min`),
        unsafeRaw.code<any>`(-int.max,)`,
      ),
    ),
  )
}
