// Converted from test/suite/corpus/transform-skew-origin.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bottom,
  box,
  call,
  center,
  define,
  deg,
  doc,
  gray,
  horizon,
  inline,
  left,
  let_,
  m,
  page,
  place,
  pt,
  right,
  set,
  skew,
  space,
  square,
  text,
  top,
} from '../../../src/index.ts'

export default () => {
  const [squareDecl, square_2] = let_('square', square.with({ width: pt(8) }))
  const skewSquare = define('skew-square')
    .pos('origin', T.any)
    .returns(T.any)
    .body((p) =>
      box(
        add(
          place(call(square_2, { stroke: gray })),
          place(skew({ ax: deg(-30), ay: deg(-30), origin: p['origin'] }, call(square_2))),
        ),
      ),
    )
  return doc(
    m.lines(
      set(page, { width: pt(100), height: pt(40) }),
      set(text, { spacing: pt(20) }),
      squareDecl,
      skewSquare.decl,
      inline(
        skewSquare(add(center, horizon)),
        space,
        skewSquare(add(bottom, left)),
        space,
        skewSquare(add(top, right)),
        space,
        skewSquare(add(horizon, right)),
      ),
    ),
  )
}
