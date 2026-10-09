// Converted from test/suite/corpus/place-float-fr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  bottom,
  center,
  colbreak,
  doc,
  fr,
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
  return doc(
    m.lines(
      set(page, { height: pt(120), columns: 2 }),
      set(place, { float: true, clearance: pt(10) }),
      set(rect, { width: pct(70) }),
    ),
    inline(
      place(add(top, center), rect(inline`I`)),
      space,
      place({ scope: 'parent' }, add(bottom, center), rect(inline`II`)),
    ),
    inline`A ${v(fr(1))} B ${colbreak()} C ${align(bottom, inline`D`)}`,
  )
}
