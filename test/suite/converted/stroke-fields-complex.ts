// Converted from test/suite/corpus/stroke-fields-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  cmyk,
  define,
  doc,
  em,
  float,
  inline,
  let_,
  m,
  pct,
  pt,
  rect,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [r1Decl, r1] = let_(
    'r1',
    rect({
      stroke: {
        paint: cmyk(pct(1), pct(2), pct(3), pct(4)),
        thickness: add(em(4), pt(2)),
        cap: 'round',
        join: 'bevel',
        miterLimit: float(5),
        dash: null,
      },
    }),
  )
  const [r2Decl, r2] = let_(
    'r2',
    rect({
      stroke: {
        paint: cmyk(pct(1), pct(2), pct(3), pct(4)),
        thickness: add(em(4), pt(2)),
        cap: 'round',
        join: 'bevel',
        miterLimit: float(5),
        dash: [pt(3), 'dot', em(4)],
      },
    }),
  )
  const [r3Decl, r3] = let_(
    'r3',
    rect({
      stroke: {
        paint: cmyk(pct(1), pct(2), pct(3), pct(4)),
        thickness: add(em(4), pt(2)),
        cap: 'round',
        join: 'bevel',
        dash: { array: [pt(3), 'dot', em(4)], phase: em(5) },
      },
    }),
  )
  return doc(
    m.lines(
      r1Decl,
      r2Decl,
      r3Decl,
      unsafeRaw.markup`#let s1 = r1.stroke`,
      unsafeRaw.markup`#let s2 = r2.stroke`,
      unsafeRaw.markup`#let s3 = r3.stroke`,
      inline(
        test(unsafeRaw.code<any>`s1.paint`, cmyk(pct(1), pct(2), pct(3), pct(4))),
        space,
        test(unsafeRaw.code<any>`s1.thickness`, add(em(4), pt(2))),
        space,
        test(unsafeRaw.code<any>`s1.cap`, 'round'),
        space,
        test(unsafeRaw.code<any>`s1.join`, 'bevel'),
        space,
        test(unsafeRaw.code<any>`s1.miter-limit`, float(5)),
        space,
        test(unsafeRaw.code<any>`s3.miter-limit`, auto),
        space,
        test(unsafeRaw.code<any>`s1.dash`, null),
        space,
        test(unsafeRaw.code<any>`s2.dash`, { array: [pt(3), 'dot', em(4)], phase: pt(0) }),
        space,
        test(unsafeRaw.code<any>`s3.dash`, { array: [pt(3), 'dot', em(4)], phase: em(5) }),
      ),
    ),
  )
}
