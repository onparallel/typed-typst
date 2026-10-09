// Converted from test/suite/corpus/math-font-features-switch.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const scr = define('scr')
    .pos('it', T.any)
    .returns(T.any)
    .body((p) => text({ stylisticSet: 1 }, unsafeRaw.math`cal(it)`))
  return doc(
    m.lines(
      scr.decl,
      inline`${unsafeRaw.math`cal(P)_i != scr(P)_i`}, ${unsafeRaw.math`cal(bold(I))_l != bold(scr(I))_l`}
${unsafeRaw.math.block`product.co_(B in scr(B))^(B in scr(bold(B))) cal(B)(X)`}`,
    ),
  )
}
