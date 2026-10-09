// Converted from test/suite/corpus/place-float-twocolumn.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  aqua,
  block,
  bottom,
  center,
  define,
  doc,
  external,
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
  v,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  const conifer = external('conifer')
  return doc(
    m.lines(
      set(page, { height: pt(100), columns: 2 }),
      set(place, { float: true, clearance: pt(10) }),
      set(rect, { width: pct(70) }),
    ),
    inline(
      place({ scope: 'parent' }, add(top, center), rect(inline`I`)),
      space,
      place(add(top, center), rect(inline`II`)),
      space,
      lines(4),
      space,
      place(add(top, center), rect(inline`III`)),
      space,
      block({ width: pct(100), height: pt(70), fill: conifer }),
      space,
      place({ scope: 'parent' }, add(bottom, center), rect(inline`IV`)),
      space,
      place(add(bottom, center), rect(inline`V`)),
      space,
      v({ weak: true }, pt(1)),
      space,
      block({ width: pct(100), height: pt(60), fill: aqua }),
    ),
  )
}
