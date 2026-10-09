// Converted from test/suite/corpus/issue-grid-skip.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  auto,
  blue,
  cm,
  doc,
  green,
  grid,
  inline,
  linebreak,
  m,
  page,
  parbreak,
  pct,
  polygon,
  pt,
  rect,
  red,
  set,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      inline(
        grid(
          { columns: [cm(2), auto], rows: [auto, auto] },
          rect({ width: pct(100), fill: red }),
          rect({ width: pct(100), fill: blue }),
          rect({ width: pct(100), height: pct(80), fill: green }),
          inline`hello ${linebreak()} darkness ${parbreak()} my ${linebreak()} old ${linebreak()} friend ${linebreak()}
I`,
          rect({ width: pct(100), height: pct(20), fill: blue }),
          polygon({ fill: red }, [pct(0), pct(0)], [pct(100), pct(0)], [pct(100), pct(20)]),
        ),
      ),
    ),
  )
}
