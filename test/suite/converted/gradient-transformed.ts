// Converted from test/suite/corpus/gradient-transformed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  blue,
  bottom,
  center,
  deg,
  doc,
  gradient,
  green,
  horizon,
  inline,
  let_,
  m,
  page,
  pct,
  place,
  pt,
  purple,
  rect,
  red,
  right,
  rotate,
  scale,
  set,
  space,
  top,
} from '../../../src/index.ts'

export default () => {
  const [gradDecl, grad] = let_('grad', gradient.linear({ relative: 'parent' }, red, blue, green, purple))
  const [myRectDecl, myRect] = let_('my-rect', rect({ width: pt(50), height: pt(50), fill: grad }))
  return doc(
    m.lines(
      gradDecl,
      myRectDecl,
      set(page, { height: pt(50), width: pt(50), margin: pt(2.5) }),
      inline(
        place(add(top, right), scale({ x: pct(200), y: pct(130) }, myRect)),
        space,
        place(add(bottom, center), rotate(deg(45), myRect)),
        space,
        place(add(horizon, center), scale({ x: pct(200), y: pct(130) }, rotate(deg(45), myRect))),
      ),
    ),
  )
}
