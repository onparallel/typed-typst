// Converted from test/suite/corpus/tiling-stroke-relative-parent.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  block,
  blue,
  center,
  circle,
  doc,
  horizon,
  inline,
  pt,
  red,
  tiling,
  top,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      align(
        add(center, top),
        block(
          {
            width: pt(50),
            height: pt(50),
            fill: tiling({ size: [pt(5), pt(5)] }, circle({ radius: pt(2.5), fill: blue })),
          },
          align(
            add(center, horizon),
            circle({
              radius: pt(15),
              stroke: add(
                pt(7.5),
                tiling({ size: [pt(5), pt(5)], relative: 'parent' }, circle({ radius: pt(2.5), fill: red })),
              ),
            }),
          ),
        ),
      ),
    ),
  )
}
