// Converted from test/suite/corpus/transform-rotate-relative-sizing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, box, define, deg, doc, inline, linebreak, m, page, pct, pt, rotate, set, text } from '../../../src/index.ts'

export default () => {
  const rotated = define('rotated')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) => box(rotate(deg(90), box({ stroke: pt(0.5), height: pct(20), clip: true }, p['body']))))
  return doc(
    m.lines(set(page, { width: pt(200), height: pt(200) }), set(text, { size: pt(32) }), rotated.decl),
    m.lines(set(rotate, { reflow: false }), inline`Hello ${rotated(inline`World`)}!${linebreak()}`),
    m.lines(set(rotate, { reflow: true }), inline`Hello ${rotated(inline`World`)}!`),
  )
}
