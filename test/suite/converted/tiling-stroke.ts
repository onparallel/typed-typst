// Converted from test/suite/corpus/tiling-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  blue,
  center,
  circle,
  doc,
  horizon,
  inline,
  pt,
  red,
  square,
  tiling,
  top,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      align(
        add(center, top),
        square({
          size: pt(50),
          fill: tiling({ size: [pt(5), pt(5)] }, align(add(horizon, center), circle({ fill: blue, radius: pt(2.5) }))),
          stroke: add(
            pt(7.5),
            tiling({ size: [pt(5), pt(5)] }, align(add(horizon, center), circle({ fill: red, radius: pt(2.5) }))),
          ),
        }),
      ),
    ),
  )
}
