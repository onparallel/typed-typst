// Converted from test/suite/corpus/grid-column-sizing-auto-base.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, cm, doc, eastern, external, grid, inline, pct, rect } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  const forest = external('forest')
  return doc(
    inline(
      grid(
        { columns: [auto, pct(60)], rows: [auto, auto] },
        rect({ width: pct(50), height: cm(0.5), fill: conifer }),
        rect({ width: pct(100), height: cm(0.5), fill: eastern }),
        rect({ width: pct(50), height: cm(0.5), fill: forest }),
      ),
    ),
  )
}
