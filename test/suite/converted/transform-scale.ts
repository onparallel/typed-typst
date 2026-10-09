// Converted from test/suite/corpus/transform-scale.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, box, define, doc, inline, m, page, pct, pt, scale, set, text } from '../../../src/index.ts'

export default () => {
  const scaled = define('scaled')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) => box(scale({ x: pct(20), y: pct(40) }, p['body'])))
  return doc(
    m.lines(set(page, { width: pt(200) }), set(text, { size: pt(32) }), scaled.decl),
    m.lines(set(scale, { reflow: false }), inline`Hello ${scaled(inline`World`)}!`),
    m.lines(set(scale, { reflow: true }), inline`Hello ${scaled(inline`World`)}!`),
  )
}
