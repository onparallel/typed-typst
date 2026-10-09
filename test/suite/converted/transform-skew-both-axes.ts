// Converted from test/suite/corpus/transform-skew-both-axes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, box, define, deg, doc, inline, m, page, pt, set, skew, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const skewed = define('skewed')
    .pos('angle', T.any)
    .returns(T.any)
    .body((p) => box(skew({ ax: deg(30), ay: p['angle'] }, inline`Some Text`)))
  return doc(
    m.lines(set(page, { width: pt(100), height: pt(250) }), set(text, { size: pt(12) }), skewed.decl),
    m.lines(
      set(skew, { reflow: true }),
      inline(unsafeRaw.code<any>`for angle in range(-30, 31, step: 10) {
  skewed(angle * 1deg)
}`),
    ),
  )
}
