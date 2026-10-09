// Converted from test/suite/corpus/place-float-align-auto.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, linebreak, m, page, place, pt, rect, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: pt(140) }), set(place, { float: true, clearance: pt(5), alignment: auto })),
    inline`${place(rect(inline`A`))} ${place(rect(inline`B`))} 1 ${linebreak()} 2 ${place(rect(inline`C`))}
${place(rect(inline`D`))}`,
  )
}
