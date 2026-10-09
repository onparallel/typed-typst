// Converted from test/suite/corpus/place-bottom-in-box.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, aqua, bottom, box, doc, inline, line, place, pt, red } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      box(
        { fill: aqua, width: pt(30), height: pt(30) },
        place(bottom, place(line({ start: [pt(0), pt(0)], end: [pt(20), pt(0)], stroke: add(red, pt(3)) }))),
      ),
    ),
  )
}
