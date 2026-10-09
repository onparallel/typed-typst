// Converted from test/suite/corpus/issue-6680-gradient-linear-with-aspect-correction.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, blue, deg, doc, gradient, page, pt, red, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, {
      width: pt(200),
      height: auto,
      margin: pt(10),
      fill: gradient.linear({ angle: deg(45) }, red, blue).sharp(2),
    }),
  )
}
