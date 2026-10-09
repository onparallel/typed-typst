// Converted from test/suite/corpus/place-float-clearance-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  aqua,
  auto,
  block,
  define,
  doc,
  fr,
  inline,
  m,
  page,
  pct,
  place,
  pt,
  set,
  space,
  table,
  v,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      inline(
        v(fr(1)),
        space,
        table(
          { columns: [fr(1), fr(1)] },
          lines(2),
          inline(),
          lines(8),
          place({ float: true }, auto, block({ width: pct(100), height: pct(100), fill: aqua })),
        ),
      ),
    ),
  )
}
