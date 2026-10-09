// Converted from test/suite/corpus/transform-skew.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, box, define, deg, doc, inline, m, page, pt, set, skew, text } from '../../../src/index.ts'

export default () => {
  const skewed = define('skewed')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) => box(skew({ ax: deg(-30) }, p['body'])))
  return doc(
    m.lines(set(page, { width: pt(100), height: pt(60) }), set(text, { size: pt(12) }), skewed.decl),
    m.lines(set(skew, { reflow: false }), inline`Hello ${skewed(inline`World`)}!`),
    m.lines(set(skew, { reflow: true }), inline`Hello ${skewed(inline`World`)}!`),
  )
}
