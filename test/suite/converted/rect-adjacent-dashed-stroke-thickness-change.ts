// Converted from test/suite/corpus/rect-adjacent-dashed-stroke-thickness-change.typ by scripts/convert-suite.ts — do not edit.
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
            bottom: { thickness: pt(4), dash: 'loosely-dashed' },
            left: { thickness: pt(8), dash: 'loosely-dashed' },
          },
        }),
      ),
    ),
  )
}
