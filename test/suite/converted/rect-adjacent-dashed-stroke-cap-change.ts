// Converted from test/suite/corpus/rect-adjacent-dashed-stroke-cap-change.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, cm, doc, inline, m, page, pt, rect, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      inline(
        rect({
          height: cm(1.2),
          width: cm(1.5),
          stroke: {
            bottom: { cap: 'square', thickness: pt(4), dash: 'loosely-dashed' },
            left: { cap: 'round', thickness: pt(4), dash: 'loosely-dashed' },
          },
        }),
      ),
    ),
  )
}
