// Converted from test/suite/corpus/gradient-conic-angled-aspect-ratio.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { color, deg, doc, gradient, grid, inline, let_, m, pct, pt, rect, spread } from '../../../src/index.ts'

export default () => {
  const [gradDecl, grad] = let_(
    'grad',
    gradient.conic({ center: [pct(70), pct(30)], angle: deg(135) }, spread(color.map.inferno)),
  )
  return doc(
    m.lines(
      gradDecl,
      inline(
        grid(
          { columns: 2, gutter: pt(5) },
          rect({ width: pt(70), height: pt(70), fill: grad }),
          rect({ width: pt(25), height: pt(70), fill: grad }),
          rect({ width: pt(70), height: pt(25), fill: grad }),
        ),
      ),
    ),
  )
}
