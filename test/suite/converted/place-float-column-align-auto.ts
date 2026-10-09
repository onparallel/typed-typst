// Converted from test/suite/corpus/place-float-column-align-auto.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, auto, define, doc, inline, m, page, pct, place, pt, rect, set, space } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(150), columns: 2 }),
      set(place, { float: true, clearance: pt(10), alignment: auto }),
      set(rect, { width: pct(75) }),
    ),
    inline(
      place(rect(inline`I`)),
      space,
      place(rect(inline`II`)),
      space,
      place(rect(inline`III`)),
      space,
      place(rect(inline`IV`)),
    ),
    inline(lines(6)),
    inline(place(rect(inline`V`)), space, place(rect(inline`VI`))),
  )
}
