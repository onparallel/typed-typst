// Converted from test/suite/corpus/tiling-lines.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  auto,
  codeBlock,
  doc,
  inline,
  let_,
  line,
  m,
  page,
  pct,
  place,
  pt,
  rect,
  set,
  tiling,
} from '../../../src/index.ts'

export default () => {
  const [tDecl, t] = let_(
    't',
    tiling(
      { size: [pt(10), pt(10)] },
      codeBlock([
        place(line({ stroke: pt(4), start: [pct(0), pct(0)], end: [pct(100), pct(100)] })),
        place(line({ stroke: pt(4), start: [pct(100), pct(0)], end: [pct(200), pct(100)] })),
        place(line({ stroke: pt(4), start: [pct(0), pct(100)], end: [pct(100), pct(200)] })),
        place(line({ stroke: pt(4), start: [pct(-100), pct(0)], end: [pct(0), pct(100)] })),
        place(line({ stroke: pt(4), start: [pct(0), pct(-100)], end: [pct(100), pct(0)] })),
      ]),
    ),
  )
  return doc(
    set(page, { width: auto, height: auto, margin: pt(0) }),
    m.lines(tDecl, inline(rect({ width: pt(50), height: pt(50), fill: t }))),
  )
}
