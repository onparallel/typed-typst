// Converted from test/suite/corpus/line-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, cm, codeBlock, doc, em, inline, line, m, page, pct, place, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(60) }),
      inline`${box(codeBlock([set(line, { stroke: pt(0.75) }), place(line({ end: [em(0.4), pt(0)] })), place(line({ start: [pt(0), em(0.4)], end: [pt(0), pt(0)] })), line({ end: [em(0.6), em(0.6)] })]))}
Hello ${box(line({ length: cm(1) }))}!`,
    ),
    inline(line({ end: [pct(70), pct(50)] })),
  )
}
