// Converted from test/suite/corpus/repr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  blue,
  cmyk,
  color,
  define,
  deg,
  dict,
  doc,
  emph,
  float,
  gradient,
  inline,
  int,
  left,
  ltr,
  luma,
  m,
  minus,
  neg,
  oklab,
  oklch,
  pt,
  raw,
  rect,
  red,
  repr,
  rgb,
  space,
  strong,
  ttb,
  type,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const t = define('t')
    .pos('a', T.any)
    .pos('b', T.any)
    .returns(T.any)
    .body((p) => test(repr(p['a']), unsafeRaw.code<any>`b.text`))
  const f = define('f')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => p['x'])
  return doc(
    t.decl,
    inline(t(auto, raw('auto')), space, t(true, raw('true')), space, t(false, raw('false'))),
    inline(
      t(float(12), raw('12.0')),
      space,
      t(3.14, raw('3.14')),
      space,
      t(float(1234567890), raw('1234567890.0')),
      space,
      t(float(123456789), raw('123456789.0')),
      space,
      t(float(0), raw('0.0')),
      space,
      t(float('-0.0'), raw('-0.0')),
      space,
      t(float(-1), raw('-1.0')),
      space,
      t(float(-9876543210), raw('-9876543210.0')),
      space,
      t(float(-987654321), raw('-987654321.0')),
      space,
      t(-3.14, raw('-3.14')),
      space,
      t(minus(float(4), float(8)), raw('-4.0')),
      space,
      t(float.inf, raw('float.inf')),
      space,
      t(neg(float.inf), raw('-float.inf')),
      space,
      t(float.nan, raw('float.nan')),
    ),
    inline(t('hi', raw('"hi"')), space, t('a\n[]"🚀string', raw('"a\\n[]\\"🚀string"'))),
    inline(t([1, 2, false], raw('(1, 2, false)')), space, t(dict({ a: 1, b: '2' }), raw('(a: 1, b: "2")'))),
    m.lines(
      f.decl,
      inline(
        t(f, raw('f')),
        space,
        t(rect, raw('rect')),
        space,
        t(() => null, raw('(..) => ..')),
        space,
        t(unsafeRaw.code<any>`f.with()`, raw('(..) => ..')),
      ),
    ),
    inline(t(int, raw('int')), space, t(type('hi'), raw('str')), space, t(type({ a: 1 }), raw('dictionary'))),
    inline(t(ltr, raw('ltr')), space, t(left, raw('left'))),
    inline(
      t(inline(strong(inline`Hey`)), raw('strong(body: [Hey])')),
      space,
      t(inline`A ${emph(inline`sequence`)}`, raw('sequence([A], [ ], emph(body: [sequence]))')),
      space,
      t(
        inline`A ${emph(inline`longer`)} ${strong(inline`sequence`)}!`,
        raw(
          { block: true },
          'sequence(\n  [A],\n  [ ],\n  emph(body: [longer]),\n  [ ],\n  strong(body: [sequence]),\n  [!],\n)',
        ),
      ),
    ),
    inline(
      t(rgb('f7a205'), raw('rgb("#f7a205")')),
      space,
      t(add(pt(2), rgb('f7a205')), raw('2pt + rgb("#f7a205")')),
      space,
      t(blue, raw('rgb("#0074d9")')),
      space,
      t(color.linearRgb(blue), raw('color.linear-rgb(0%, 17.46%, 69.39%)')),
      space,
      t(oklab(blue), raw('oklab(56.22%, -0.05, -0.17)')),
      space,
      t(oklch(blue), raw('oklch(56.22%, 0.177, 253.71deg)')),
      space,
      t(cmyk(blue), raw('cmyk(100%, 46.54%, 0%, 14.9%)')),
      space,
      t(color.hsl(blue), raw('color.hsl(207.93deg, 100%, 42.55%)')),
      space,
      t(color.hsv(blue), raw('color.hsv(207.93deg, 100%, 85.1%)')),
      space,
      t(luma(blue), raw('luma(45.53%)')),
    ),
    inline(
      t(
        gradient.linear(blue, red),
        raw('gradient.linear((oklab(56.22%, -0.05, -0.17), 0%), (oklab(65.95%, 0.2, 0.108), 100%))'),
      ),
      space,
      t(
        gradient.linear({ dir: ttb, space: rgb }, blue, red),
        raw('gradient.linear(dir: rtl, space: rgb, (rgb("#0074d9"), 0%), (rgb("#ff4136"), 100%))'),
      ),
      space,
      t(
        gradient.linear({ relative: 'self', angle: deg(45), space: rgb }, blue, red),
        raw(
          'gradient.linear(angle: 45deg, space: rgb, relative: "self", (rgb("#0074d9"), 0%), (rgb("#ff4136"), 100%))',
        ),
      ),
      space,
      t(
        gradient.linear({ space: rgb, angle: deg(45) }, blue, red),
        raw('gradient.linear(angle: 45deg, space: rgb, (rgb("#0074d9"), 0%), (rgb("#ff4136"), 100%))'),
      ),
    ),
  )
}
