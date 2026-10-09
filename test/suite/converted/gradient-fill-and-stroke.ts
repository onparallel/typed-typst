// Converted from test/suite/corpus/gradient-fill-and-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  aqua,
  auto,
  black,
  blue,
  call,
  center,
  circle,
  codeBlock,
  curve,
  doc,
  gradient,
  green,
  grid,
  horizon,
  inline,
  let_,
  lime,
  line,
  m,
  page,
  pct,
  place,
  pt,
  rect,
  set,
  top,
  white,
  yellow,
} from '../../../src/index.ts'

export default () => {
  const [strokeDecl, stroke_2] = let_('stroke', add(pt(10), gradient.linear(green, yellow, blue).sharp(5)))
  const [fillDecl, fill] = let_('fill', gradient.linear(lime, yellow.lighten(pct(60)), aqua).sharp(5))
  const [scaleDecl, scale_2] = let_('scale', gradient.linear(black, white, black, white, black).sharp(5))
  const [markedDecl, marked] = let_('marked', (shape) =>
    codeBlock([
      shape,
      place(add(center, top), line({ length: pt(60), stroke: scale_2 })),
      place(add(center, horizon), line({ length: pt(50), stroke: scale_2 })),
    ]),
  )
  return doc(
    m.lines(
      set(page, { width: auto }),
      strokeDecl,
      fillDecl,
      scaleDecl,
      markedDecl,
      inline(
        grid(
          { columns: 2, gutter: pt(15) },
          call(marked, rect({ width: pt(50), height: pt(50), radius: pt(0), stroke: stroke_2, fill: fill })),
          call(marked, rect({ width: pt(50), height: pt(50), radius: pt(20), stroke: stroke_2, fill: fill })),
          call(
            marked,
            curve(
              { stroke: stroke_2, fill: fill },
              curve.line([pt(50), pt(0)]),
              curve.line([pt(50), pt(50)]),
              curve.line([pt(0), pt(50)]),
              curve.close(),
            ),
          ),
          call(marked, circle({ radius: pt(25), stroke: stroke_2, fill: fill })),
        ),
      ),
    ),
  )
}
