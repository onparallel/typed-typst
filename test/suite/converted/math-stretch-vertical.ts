// Converted from test/suite/corpus/math-stretch-vertical.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, em, inline, m, math, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const ext = define('ext')
    .pos('sym', T.any)
    .returns(T.any)
    .body((p) => math.stretch({ size: em(2) }, p['sym']))
  return doc(
    m.lines(
      ext.decl,
      inline(unsafeRaw.math.block`ext(bar.v) quad ext(bar.v.double) quad
  ext(chevron.l) quad ext(chevron.r) quad
  ext(paren.l) quad ext(paren.r) \\
  ext(bracket.l.stroked) quad ext(bracket.r.stroked) quad
  ext(brace.l) quad ext(brace.r) quad
  ext(bracket.l) quad ext(bracket.r)`),
    ),
  )
}
