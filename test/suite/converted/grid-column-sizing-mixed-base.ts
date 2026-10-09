// Converted from test/suite/corpus/grid-column-sizing-mixed-base.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, cm, doc, external, fr, grid, inline, m, page, pct, rect, set } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  const forest = external('forest')
  return doc(
    m.lines(
      set(page, { height: cm(4), margin: cm(0) }),
      inline(
        grid(
          { rows: [cm(1), fr(1), fr(1), auto] },
          rect({ height: pct(50), width: pct(100), fill: conifer }),
          rect({ height: pct(50), width: pct(100), fill: forest }),
          rect({ height: pct(50), width: pct(100), fill: conifer }),
          rect({ height: pct(25), width: pct(100), fill: forest }),
        ),
      ),
    ),
  )
}
