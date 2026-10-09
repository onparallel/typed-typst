// Converted from test/suite/corpus/rect-stroke-caps.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, pt, rect, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      rect({
        width: pt(20),
        height: pt(20),
        stroke: { left: { cap: 'round', thickness: pt(5) }, right: { cap: 'square', thickness: pt(7) } },
      }),
      space,
      rect({
        width: pt(20),
        height: pt(20),
        stroke: { left: { cap: 'round', thickness: pt(5) }, top: { cap: 'square', thickness: pt(7) } },
      }),
      space,
      rect({
        width: pt(20),
        height: pt(20),
        radius: { top: pt(3) },
        stroke: { left: { cap: 'round', thickness: pt(5) }, top: { cap: 'square', thickness: pt(7) } },
      }),
    ),
  )
}
