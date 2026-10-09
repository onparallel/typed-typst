// Converted from test/suite/corpus/transform-scale-origin.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  bottom,
  box,
  center,
  doc,
  external,
  inline,
  left,
  let_,
  m,
  page,
  pct,
  pt,
  rect,
  right,
  scale,
  set,
  space,
  top,
} from '../../../src/index.ts'

export default () => {
  const forest = external('forest')
  const [rDecl, r] = let_('r', rect({ width: pt(100), height: pt(10), fill: forest }))
  return doc(
    m.lines(
      rDecl,
      set(page, { height: pt(65) }),
      inline(
        box(scale({ x: pct(50), y: pct(200), origin: add(left, top) }, r)),
        space,
        box(scale({ x: pct(50), origin: center }, r)),
        space,
        box(scale({ x: pct(50), y: pct(200), origin: add(right, bottom) }, r)),
      ),
    ),
  )
}
