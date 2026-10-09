// Converted from test/suite/corpus/grid-column-sizing-fr-base.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, external, fr, grid, inline, pct, rect, times } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  const forest = external('forest')
  return doc(
    inline(
      grid(
        { columns: times([fr(1)], 4), rows: [cm(1)] },
        rect({ width: pct(50), fill: conifer }),
        rect({ width: pct(50), fill: forest }),
        rect({ width: pct(50), fill: conifer }),
        rect({ width: pct(50), fill: forest }),
      ),
    ),
  )
}
