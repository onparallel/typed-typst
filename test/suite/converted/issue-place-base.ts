// Converted from test/suite/corpus/issue-place-base.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  center,
  doc,
  horizon,
  inline,
  left,
  m,
  page,
  pct,
  place,
  pt,
  right,
  set,
  space,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(80), margin: pt(0) }),
      inline(
        place({ dx: pct(-70), dy: pct(20) }, right, inline`First`),
        space,
        place({ dx: pct(20), dy: pct(60) }, left, inline`Second`),
        space,
        place({ dx: pct(25), dy: pct(25) }, add(center, horizon), inline`Third`),
      ),
    ),
  )
}
