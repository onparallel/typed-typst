// Converted from test/suite/corpus/place-horizon-in-boxes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  aqua,
  box,
  codeBlock,
  doc,
  green,
  horizon,
  inline,
  line,
  place,
  pt,
  red,
  yellow,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      box(
        { fill: aqua, width: pt(30), height: pt(30) },
        codeBlock([
          box(
            { fill: yellow },
            codeBlock([
              inline`Hello`,
              place(horizon, line({ start: [pt(0), pt(0)], end: [pt(20), pt(0)], stroke: add(red, pt(2)) })),
            ]),
          ),
          place(horizon, line({ start: [pt(0), pt(0)], end: [pt(20), pt(0)], stroke: add(green, pt(3)) })),
        ]),
      ),
    ),
  )
}
