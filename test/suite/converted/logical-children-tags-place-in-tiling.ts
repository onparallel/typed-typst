// Converted from test/suite/corpus/logical-children-tags-place-in-tiling.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, inline, place, pt, rect, right, space, tiling, top } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      rect({
        width: pt(90),
        height: pt(90),
        fill: tiling(
          { size: [pt(30), pt(30)] },
          inline(space, place({ float: true }, add(top, right), inline`hi`), space),
        ),
      }),
    ),
  )
}
