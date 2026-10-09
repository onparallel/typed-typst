// Converted from test/suite/corpus/place-float-twocolumn-align-auto.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, auto, define, doc, inline, m, page, pct, place, pt, rect, set, space } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(100), columns: 2 }),
      set(place, { float: true, clearance: pt(10) }),
      set(rect, { width: pct(70) }),
    ),
    inline(
      place({ scope: 'parent' }, auto, rect(inline`I`)),
      space,
      lines(4),
      space,
      place({ scope: 'parent' }, auto, rect(inline`II`)),
      space,
      lines(4),
    ),
  )
}
