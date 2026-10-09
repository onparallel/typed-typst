// Converted from test/suite/corpus/math-stretch-horizontal.typ by scripts/convert-suite.ts — do not edit.
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
      inline(unsafeRaw.math.block`ext(arrow.r) quad ext(arrow.l.double.bar) \\
  ext(harpoon.rb) quad ext(harpoons.ltrb) \\
  ext(paren.t) quad ext(shell.b) \\
  ext(eq) quad ext(equiv)`),
    ),
  )
}
