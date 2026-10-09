// Converted from test/suite/corpus/place-float-column-queued.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bottom,
  define,
  doc,
  inline,
  m,
  page,
  pct,
  place,
  pt,
  rect,
  set,
  space,
  text,
  top,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(100), columns: 2 }),
      set(place, { float: true, clearance: pt(10) }),
      set(rect, { width: pct(75) }),
      set(text, { costs: { widow: pct(0), orphan: pct(0) } }),
    ),
    inline(lines(3)),
    inline(place(top, rect(inline`I`)), space, place(top, rect(inline`II`)), space, place(bottom, rect(inline`III`))),
    inline(lines(3)),
  )
}
