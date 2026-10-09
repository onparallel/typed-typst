// Converted from test/suite/corpus/transform-scale-abs-and-auto.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, image, inline, let_, m, page, path, pct, pt, scale, set, space } from '../../../src/index.ts'

export default () => {
  const [cylinderDecl, cylinder] = let_('cylinder', image(path('/assets/images/cylinder.svg')))
  return doc(
    m.lines(set(page, { width: pt(200), height: pt(200) }), cylinderDecl),
    inline(
      cylinder,
      space,
      scale({ x: pt(100), y: pt(50), reflow: true }, cylinder),
      space,
      scale({ x: auto, y: pt(50), reflow: true }, cylinder),
      space,
      scale({ x: pt(100), y: auto, reflow: true }, cylinder),
      space,
      scale({ x: pct(150), y: auto, reflow: true }, cylinder),
    ),
  )
}
