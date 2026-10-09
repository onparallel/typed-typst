// Converted from test/suite/corpus/math-call-pass-to-box.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, blue, box, define, doc, inline, m, math, pt, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const id = define('id')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) => p['body'])
  const bx = define('bx')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) => box({ stroke: add(blue, pt(0.5)), inset: { x: pt(2), y: pt(3) } }, p['body']))
  const eq = define('eq')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) => math.equation(p['body']))
  return doc(
    m.lines(
      id.decl,
      bx.decl,
      eq.decl,
      inline(unsafeRaw.math.block`x y   &&quad     x (y z)   &quad     x y^z  \\
  id(x y)  &&quad  id(x (y z))  &quad  id(x y^z) \\
  eq(x y)  &&quad  eq(x (y z))  &quad  eq(x y^z) \\
  bx(x y)  &&quad  bx(x (y z))  &quad  bx(x y^z) \\`),
    ),
  )
}
