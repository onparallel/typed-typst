// Converted from test/suite/corpus/issue-7901-rect-negative-dimensions-radius.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  black,
  blue,
  center,
  cm,
  doc,
  green,
  grid,
  horizon,
  inline,
  let_,
  m,
  mm,
  pct,
  pt,
  rect,
  red,
  set,
  space,
  yellow,
} from '../../../src/index.ts'

export default () => {
  const [rectsDecl, rects] = let_(
    'rects',
    grid(
      { columns: [mm(7), mm(7), mm(7), mm(7)], gutter: pt(5) },
      rect(),
      rect({ width: mm(-7) }),
      rect({ height: cm(-1) }),
      rect({ width: mm(-7), height: cm(-1) }),
    ),
  )
  return doc(
    m.lines(
      rectsDecl,
      set(rect, { fill: red, width: mm(7), height: cm(1), radius: pct(40) }),
      set(align, { alignment: add(center, horizon) }),
      inline(
        rects,
        space,
        set(rect, { stroke: add(black, pt(3)) }),
        space,
        rects,
        space,
        set(rect, {
          stroke: {
            left: add(black, pt(3)),
            top: add(blue, pt(3)),
            right: add(green, pt(3)),
            bottom: add(yellow, pt(3)),
          },
        }),
        space,
        rects,
        space,
        set(rect, { radius: pt(0) }),
        space,
        rects,
      ),
    ),
  )
}
