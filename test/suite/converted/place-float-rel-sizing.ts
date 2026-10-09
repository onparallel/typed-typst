// Converted from test/suite/corpus/place-float-rel-sizing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  bottom,
  center,
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
    ),
    m.lines(
      set(align, { alignment: bottom }),
      inline(rect({ width: pct(100), height: pct(30) }), space, rect({ width: pct(100), height: pct(30) })),
    ),
  )
}
