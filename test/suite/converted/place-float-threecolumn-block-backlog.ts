// Converted from test/suite/corpus/place-float-threecolumn-block-backlog.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  aqua,
  block,
  bottom,
  center,
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
  yellow,
} from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  return doc(
    m.lines(
      set(page, { height: pt(100), columns: 3 }),
      set(place, { float: true, clearance: pt(10) }),
      set(rect, { width: pct(70) }),
    ),
    inline(
      place({ scope: 'parent' }, add(top, center), rect(inline`I`)),
      space,
      block({ fill: aqua, width: pct(100), height: pt(70) }),
      space,
      block({ fill: conifer, width: pct(100), height: pt(160) }),
      space,
      place({ scope: 'parent' }, add(bottom, center), rect(inline`II`)),
      space,
      place(top, rect({ height: pct(40) }, inline`III`)),
      space,
      block({ fill: yellow, width: pct(100), height: pt(60) }),
    ),
  )
}
