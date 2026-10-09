// Converted from test/suite/corpus/color-components.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cmyk,
  color,
  define,
  deg,
  doc,
  inline,
  luma,
  m,
  oklab,
  oklch,
  pct,
  rgb,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const testComponents = define('test-components')
    .pos('col', T.any)
    .pos('ref', T.any)
    .named('has-alpha', T.any, true)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  // Perform an approximate scalar comparison.
  let are-equal((a, b)) = {
    let to-float(x) = if type(x) == angle { x.rad() } else { float(x) }
    let epsilon = 1e-4 // The maximum error between both numbers
    test(type(a), type(b))
    calc.abs(to-float(a) - to-float(b)) < epsilon
  }

  let ref-without-alpha = if has-alpha { ref.slice(0, -1) } else { ref }
  test(col.components().len(), ref.len())
  assert(col.components().zip(ref).all(are-equal))
  assert(col.components(alpha: false).zip(ref-without-alpha).all(are-equal))
}`,
    )
  return doc(
    m.lines(
      testComponents.decl,
      inline(
        testComponents(rgb(1, 2, 3, 4), [pct(0.39), pct(0.78), pct(1.18), pct(1.57)]),
        space,
        testComponents(luma(40), [pct(15.69), pct(100)]),
        space,
        testComponents(luma(40, pct(50)), [pct(15.69), pct(50)]),
        space,
        testComponents({ hasAlpha: false }, cmyk(pct(4), pct(5), pct(6), pct(7)), [pct(4), pct(5), pct(6), pct(7)]),
        space,
        testComponents(oklab(pct(10), 0.2, 0.4), [pct(10), 0.2, 0.4, pct(100)]),
        space,
        testComponents(oklch(pct(10), 0.2, deg(90)), [pct(10), 0.2, deg(90), pct(100)]),
        space,
        testComponents(oklab(pct(10), pct(50), pct(200)), [pct(10), 0.2, 0.8, pct(100)]),
        space,
        testComponents(oklch(pct(10), pct(50), deg(90)), [pct(10), 0.2, deg(90), pct(100)]),
        space,
        testComponents(color.linearRgb(pct(10), pct(20), pct(30)), [pct(10), pct(20), pct(30), pct(100)]),
        space,
        testComponents(color.hsv(deg(10), pct(20), pct(30)), [deg(10), pct(20), pct(30), pct(100)]),
        space,
        testComponents(color.hsl(deg(10), pct(20), pct(30)), [deg(10), pct(20), pct(30), pct(100)]),
      ),
    ),
  )
}
