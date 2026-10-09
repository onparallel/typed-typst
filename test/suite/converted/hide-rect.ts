// Converted from test/suite/corpus/hide-rect.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, fr, grid, hide, inline, pct, pt, rect, rgb, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    set(rect, { inset: pt(8), fill: rgb('e4e5ea'), width: pct(100) }),
    inline`Hidden: ${hide(inline(space, grid({ columns: [fr(1), fr(1), fr(2)], rows: [auto, pt(40)], gutter: pt(3) }, rect(inline`A`), rect(inline`B`), rect(inline`C`), rect({ height: pct(100) }, inline`D`)), space))}
${grid({ columns: [fr(1), fr(1), fr(2)], rows: [auto, pt(40)], gutter: pt(3) }, rect(inline`A`), rect(inline`B`), rect(inline`C`), rect({ height: pct(100) }, inline`D`))}`,
  )
}
