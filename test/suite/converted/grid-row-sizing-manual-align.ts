// Converted from test/suite/corpus/grid-row-sizing-manual-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, auto, center, cm, doc, fr, grid, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: cm(3), margin: pt(0) }),
      inline(
        grid(
          { columns: [fr(1)], rows: [fr(1), auto, fr(2)] },
          inline(),
          align(center, inline`A bit more to the top`),
          inline(),
        ),
      ),
    ),
  )
}
