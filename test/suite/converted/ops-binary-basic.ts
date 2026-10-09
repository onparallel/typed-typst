// Converted from test/suite/corpus/ops-binary-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  cm,
  data,
  decimal,
  define,
  deg,
  div,
  doc,
  em,
  float,
  fr,
  inline,
  let_,
  m,
  minus,
  pct,
  pt,
  space,
  times,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [numsDecl, nums] = let_(
    'nums',
    data([
      1,
      3.14,
      decimal('12.45'),
      pt(12),
      em(3),
      add(pt(12), em(3)),
      deg(45),
      pct(90),
      add(pct(13), pt(10)),
      add(add(pct(5), em(1)), pt(3)),
      fr(2.3),
    ]),
  )
  const [dimsDecl, dims] = let_(
    'dims',
    data([pt(10), em(1), add(pt(10), em(1)), pct(30), add(pct(50), cm(3)), add(add(pct(40), em(2)), cm(1))]),
  )
  return doc(
    inline(
      test(minus(1, 4), times(3, -1)),
      space,
      test(minus(cm(4), cm(2)), cm(2)),
      space,
      test(minus(float(100), 0.01), 99.99),
    ),
    inline(test(times(2, 4), 8)),
    inline(test(div(pt(12), 0.4), pt(30)), space, test(div(7, 2), 3.5)),
    inline(
      test(unsafeRaw.code<any>`3-4 * 5 < -10`, true),
      space,
      test(unsafeRaw.code<any>`{ let x; x = 1 + 4*5 >= 21 and { x = "a"; x + "b" == "ab" }; x }`, true),
    ),
    inline(
      test(
        unsafeRaw.code<any>`if true {
  1
} + 2`,
        3,
      ),
    ),
    numsDecl,
    inline(unsafeRaw.code<any>`for v in nums {
  // Test plus and minus.
  test(v + v - v, v)
  test(v - v - v, -v)

  // Test plus/minus and multiplication.
  test(v - v, 0 * v)
  test(v + v, 2 * v)

  // Integer or decimal addition does not give a float.
  if type(v) not in (int, decimal) {
    test(v + v, 2.0 * v)
  }

  if type(v) not in (relative, decimal) and ("pt" not in repr(v) or "em" not in repr(v)) {
    test(v / v, 1.0)
  }
}`),
    m.lines(
      dimsDecl,
      inline(unsafeRaw.code<any>`for a in dims {
  for b in dims {
    test(type(a + b), type(a - b))
  }

  for b in (7, 3.14) {
    test(type(a * b), type(a))
    test(type(b * a), type(a))
    test(type(a / b), type(a))
  }
}`),
    ),
    inline(unsafeRaw.code<any>`for a in (0pt, 0em, 0%) {
  for b in (10pt, 10em, 10%) {
    test((2 * b) / b, 2)
    test((a + b * 2) / b, 2)
    test(b / (b * 2 + a), 0.5)
  }
}`),
  )
}
