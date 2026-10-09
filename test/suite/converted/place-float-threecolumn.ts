// Converted from test/suite/corpus/place-float-threecolumn.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bottom,
  center,
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
  top,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(100), columns: 3 }),
      set(place, { float: true, clearance: pt(10) }),
      set(rect, { width: pct(70) }),
    ),
    inline(
      place({ scope: 'parent' }, add(bottom, center), rect(inline`I`)),
      space,
      lines(21),
      space,
      place({ scope: 'parent' }, add(top, center), rect(inline`II`)),
    ),
  )
}
