// Converted from test/suite/corpus/place-float-flow-size.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  auto,
  bottom,
  center,
  doc,
  inline,
  m,
  page,
  pagebreak,
  place,
  pt,
  rect,
  set,
  space,
  top,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: auto, height: auto }), set(place, { float: true, clearance: pt(5) })),
    inline(
      place(bottom, rect({ width: pt(80), height: pt(10) })),
      space,
      place(add(top, center), rect({ height: pt(20) })),
      space,
      align(center, inline`A`),
      space,
      pagebreak(),
      space,
      align(center, inline`B`),
      space,
      place({ scope: 'parent' }, bottom, rect({ height: pt(10) })),
    ),
  )
}
