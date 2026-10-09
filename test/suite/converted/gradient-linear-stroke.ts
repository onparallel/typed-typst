// Converted from test/suite/corpus/gradient-linear-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, align, black, blue, center, doc, gradient, inline, pt, red, square, top } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      align(add(center, top), square({ size: pt(50), fill: black, stroke: add(pt(5), gradient.linear(red, blue)) })),
    ),
  )
}
