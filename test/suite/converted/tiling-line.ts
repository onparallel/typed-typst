// Converted from test/suite/corpus/tiling-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, let_, line, m, page, pct, pt, rect, set, tiling } from '../../../src/index.ts'

export default () => {
  const [tDecl, t] = let_(
    't',
    tiling({ size: [pt(10), pt(10)] }, line({ stroke: pt(4), start: [pct(0), pct(0)], end: [pct(100), pct(100)] })),
  )
  return doc(
    m.lines(
      set(page, { width: auto, height: auto, margin: pt(0) }),
      tDecl,
      inline(rect({ width: pt(50), height: pt(50), fill: t })),
    ),
  )
}
