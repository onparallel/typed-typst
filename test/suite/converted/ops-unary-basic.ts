// Converted from test/suite/corpus/ops-unary-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, define, doc, inline, minus, neg, space, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(unsafeRaw.code<any>`for v in (1, 3.14, decimal("12.43"), 12pt, 45deg, 90%, 13% + 10pt, 6.3fr) {
  // Test plus.
  test(+v, v)

  // Test minus.
  test(-v, -1 * v)
  test(--v, v)

  // Test combination.
  test(-++ --v, -v)
}`),
    inline(test(neg(add(4, 2)), minus(6, 12))),
    inline(
      test(add(2, 4), 6),
      space,
      test(add('a', 'b'), 'ab'),
      space,
      test(unsafeRaw.code<any>`"a" + if false { "b" }`, 'a'),
      space,
      test(unsafeRaw.code<any>`"a" + if true { "b" }`, 'ab'),
      space,
      test(add(times(13, 'a'), 'bbbbbb'), 'aaaaaaaaaaaaabbbbbb'),
      space,
      test(add([1, 2], [3, 4]), [1, 2, 3, 4]),
      space,
      test(add({ a: 1 }, { b: 2, c: 3 }), { a: 1, b: 2, c: 3 }),
    ),
  )
}
