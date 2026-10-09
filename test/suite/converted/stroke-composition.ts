// Converted from test/suite/corpus/stroke-composition.typ by scripts/convert-suite.ts — do not edit.
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
  h,
  horizon,
  inline,
  ltr,
  m,
  pct,
  pt,
  red,
  set,
  square,
  stack,
  strong,
  text,
  yellow,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(square, { stroke: pt(4) }),
      set(text, { font: 'Roboto' }),
      inline(
        stack(
          { dir: ltr },
          square(
            { stroke: { left: red, top: yellow, right: green, bottom: blue }, radius: pct(50), inset: pt(8) },
            align(add(center, horizon), inline(strong(inline`G`))),
          ),
          h(cm(0.5)),
          square(
            {
              stroke: { left: red, top: add(yellow, pt(8)), right: green, bottom: add(blue, pt(2)) },
              radius: pct(50),
              inset: pt(8),
            },
            align(add(center, horizon), inline(strong(inline`G`))),
          ),
          h(cm(0.5)),
          square(
            { stroke: { left: red, top: yellow, right: green, bottom: blue }, radius: pct(100), inset: pt(8) },
            align(add(center, horizon), inline(strong(inline`G`))),
          ),
        ),
      ),
    ),
    m.lines(
      set(square, { size: pt(20), stroke: pt(2) }),
      set(square, {
        stroke: { left: add(green, pt(4)), top: add(black, pt(2)), right: blue, bottom: add(black, pt(2)) },
      }),
      inline(
        stack(
          { dir: ltr },
          square(),
          h(cm(0.2)),
          square({ radius: { topLeft: pt(0), rest: pt(1) } }),
          h(cm(0.2)),
          square({ radius: { topLeft: pt(0), rest: pt(8) } }),
          h(cm(0.2)),
          square({ radius: { topLeft: pt(0), rest: pt(100) } }),
        ),
      ),
    ),
    m.lines(
      set(square, {
        stroke: {
          left: add(green, pt(4)),
          top: add(black, pt(2)),
          right: { paint: blue, dash: 'dotted' },
          bottom: { paint: black, dash: 'dotted' },
        },
      }),
      inline(
        stack(
          { dir: ltr },
          square(),
          h(cm(0.2)),
          square({ radius: { topLeft: pt(0), rest: pt(1) } }),
          h(cm(0.2)),
          square({ radius: { topLeft: pt(0), rest: pt(8) } }),
          h(cm(0.2)),
          square({ radius: { topLeft: pt(0), rest: pt(100) } }),
        ),
      ),
    ),
  )
}
