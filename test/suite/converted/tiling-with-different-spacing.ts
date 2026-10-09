// Converted from test/suite/corpus/tiling-with-different-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, circle, doc, inline, let_, m, place, pt, rect, space, tiling } from '../../../src/index.ts'

export default () => {
  const [contentDecl, content_2] = let_(
    'content',
    place({ dx: pt(5), dy: pt(5) }, circle({ radius: pt(5), fill: blue })),
  )
  const [pat1Decl, pat1] = let_('pat1', tiling({ size: [pt(20), pt(20)] }, content_2))
  const [pat2Decl, pat2] = let_('pat2', tiling({ size: [pt(20), pt(20)], spacing: [pt(20), pt(0)] }, content_2))
  return doc(
    m.lines(contentDecl, pat1Decl, pat2Decl),
    inline(
      rect({ fill: pat1, width: pt(100), height: pt(20), stroke: pt(1) }),
      space,
      rect({ fill: pat2, width: pt(100), height: pt(20), stroke: pt(1) }),
    ),
  )
}
