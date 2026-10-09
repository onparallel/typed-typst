// Converted from test/suite/corpus/issue-5705-gradient-border-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  black,
  center,
  deg,
  doc,
  gradient,
  green,
  horizon,
  inline,
  let_,
  m,
  pt,
  rect,
  set,
  yellow,
} from '../../../src/index.ts'

export default () => {
  const [strokeDecl, stroke_2] = let_('stroke', {
    top: add(gradient.linear({ angle: deg(90) }, green, black, yellow), pt(15)),
    right: add(gradient.linear({ angle: deg(180) }, green, black, yellow), pt(15)),
    bottom: add(gradient.linear({ angle: deg(270) }, green, black, yellow), pt(15)),
    left: add(gradient.linear({ angle: deg(0) }, green, black, yellow), pt(15)),
  })
  return doc(
    m.lines(
      strokeDecl,
      set(align, { alignment: add(center, horizon) }),
      inline(
        rect(
          { width: pt(100), height: pt(100), radius: pt(15), stroke: stroke_2 },
          rect(
            { width: pt(65), height: pt(65), radius: pt(0), stroke: stroke_2 },
            rect({ width: pt(30), height: pt(30), radius: pt(30), stroke: stroke_2 }),
          ),
        ),
      ),
    ),
  )
}
