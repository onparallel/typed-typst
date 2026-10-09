// Converted from test/suite/corpus/tiling-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  blocks,
  color,
  deg,
  doc,
  gradient,
  inline,
  let_,
  lorem,
  m,
  page,
  pct,
  pt,
  rect,
  rotate,
  scale,
  set,
  spread,
  square,
  text,
  tiling,
} from '../../../src/index.ts'

export default () => {
  const [tDecl, t] = let_(
    't',
    tiling(
      { size: [pt(30), pt(30)], relative: 'parent' },
      square({ size: pt(30), fill: gradient.conic(spread(color.map.rainbow)) }),
    ),
  )
  return doc(
    tDecl,
    set(page, { width: pt(140), height: pt(140), fill: t }),
    inline(
      rotate(
        deg(45),
        scale(
          { x: pct(50), y: pct(70) },
          rect(
            { width: pct(100), height: pct(100), stroke: pt(1) },
            blocks(inline(lorem(10)), m.lines(set(text, { fill: t }), inline(lorem(10)))),
          ),
        ),
      ),
    ),
  )
}
