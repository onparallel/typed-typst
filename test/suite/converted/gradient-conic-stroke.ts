// Converted from test/suite/corpus/gradient-conic-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, align, black, blue, bottom, center, doc, gradient, inline, pt, red, square } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      align(add(center, bottom), square({ size: pt(50), fill: black, stroke: add(pt(10), gradient.conic(red, blue)) })),
    ),
  )
}
