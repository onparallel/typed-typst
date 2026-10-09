// Converted from test/suite/corpus/show-where-folding-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, blue, codeBlock, doc, inline, m, pt, rect, set, show, space, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(rect, { width: pt(40), height: pt(10) }), set(rect, { stroke: blue }), set(rect, { stroke: pt(2) })),
    inline(
      codeBlock([show(where(rect, { stroke: blue }), 'Not Triggered')], rect()),
      space,
      codeBlock([show(where(rect, { stroke: pt(2) }), 'Not Triggered')], rect()),
      space,
      codeBlock([show(where(rect, { stroke: add(pt(2), blue) }), 'Triggered')], rect()),
    ),
  )
}
