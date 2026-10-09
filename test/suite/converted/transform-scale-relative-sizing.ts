// Converted from test/suite/corpus/transform-scale-relative-sizing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, box, define, doc, inline, linebreak, m, page, pct, pt, scale, set, text } from '../../../src/index.ts'

export default () => {
  const scaled = define('scaled')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) =>
      box(scale({ x: pct(60), y: pct(40) }, box({ stroke: pt(0.5), width: pct(30), clip: true }, p['body']))),
    )
  return doc(
    m.lines(set(page, { width: pt(200), height: pt(200) }), set(text, { size: pt(32) }), scaled.decl),
    m.lines(set(scale, { reflow: false }), inline`Hello ${scaled(inline`World`)}!${linebreak()}`),
    m.lines(set(scale, { reflow: true }), inline`Hello ${scaled(inline`World`)}!`),
  )
}
