// Converted from test/suite/corpus/gradient-conic-relative-self.typ by scripts/convert-suite.ts — do not edit.
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
  inline,
  left,
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
  set,
  space,
  top,
} from '../../../src/index.ts'

export default () => {
  const [gradDecl, grad] = let_('grad', gradient.conic({ relative: 'self' }, red, blue, green, purple))
  const [myRectDecl, myRect] = let_('my-rect', rect({ width: pct(50), height: pct(50), fill: grad }))
  return doc(
    m.lines(
      gradDecl,
      myRectDecl,
      set(page, {
        height: pt(50),
        width: pt(50),
        margin: pt(2.5),
        fill: grad,
        background: place(add(top, left), myRect),
      }),
      inline(place(add(top, right), myRect), space, place(add(bottom, center), rotate(deg(45), myRect))),
    ),
  )
}
