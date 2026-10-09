// Converted from test/suite/corpus/highlight-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, blue, doc, green, highlight, inline, lorem, orange, pt, red, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      highlight({ stroke: add(pt(2), blue) }, inline`abc`),
      space,
      highlight({ stroke: { top: blue, left: red, bottom: green, right: orange } }, inline`abc`),
      space,
      highlight({ stroke: pt(1), radius: pt(3) }, inline(lorem(5))),
    ),
  )
}
