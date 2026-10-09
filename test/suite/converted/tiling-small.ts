// Converted from test/suite/corpus/tiling-small.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { black, box, doc, em, inline, pt, space, square, tiling, v } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      box({
        width: pt(8),
        height: pt(1),
        fill: tiling({ size: [pt(1), pt(1)] }, square({ size: pt(1), fill: black })),
      }),
      space,
      v(em(-1)),
      space,
      box({
        width: pt(8),
        height: pt(1),
        fill: tiling({ size: [pt(2), pt(1)] }, square({ size: pt(1), fill: black })),
      }),
    ),
  )
}
