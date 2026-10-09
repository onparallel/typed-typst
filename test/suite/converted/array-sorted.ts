// Converted from test/suite/corpus/array-sorted.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, data, define, doc, inline, space, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([]).sorted(), []),
      space,
      test(data([]).sorted({ key: (x) => x }), []),
      space,
      test(unsafeRaw.code<any>`((true, false) * 10).sorted()`, add(times([false], 10), times([true], 10))),
      space,
      test(data(['it', 'the', 'hi', 'text']).sorted(), ['hi', 'it', 'text', 'the']),
      space,
      test(data(['I', 'the', 'hi', 'text']).sorted({ key: (x_2) => x_2 }), ['I', 'hi', 'text', 'the']),
      space,
      test(data(['I', 'the', 'hi', 'text']).sorted({ key: unsafeRaw.code<any>`x => x.len()` }), [
        'I',
        'hi',
        'the',
        'text',
      ]),
      space,
      test(data([2, 1, 3, 10, 5, 8, 6, -7, 2]).sorted(), [-7, 1, 2, 2, 3, 5, 6, 8, 10]),
      space,
      test(data([2, 1, 3, -10, -5, 8, 6, -7, 2]).sorted({ key: (x_4) => x_4 }), [-10, -7, -5, 1, 2, 2, 3, 6, 8]),
      space,
      test(
        data([2, 1, 3, -10, -5, 8, 6, -7, 2]).sorted({ key: (x_5) => times(x_5, x_5) }),
        [1, 2, 2, 3, -5, 6, -7, 8, -10],
      ),
      space,
      test(data(['I', 'the', 'hi', 'text']).sorted({ by: (x_6, y) => unsafeRaw.code<any>`x.len() < y.len()` }), [
        'I',
        'hi',
        'the',
        'text',
      ]),
      space,
      test(
        data(['I', 'the', 'hi', 'text']).sorted({
          key: unsafeRaw.code<any>`x => x.len()`,
          by: (x_8, y_2) => unsafeRaw.code<any>`y < x`,
        }),
        ['text', 'the', 'hi', 'I'],
      ),
    ),
  )
}
