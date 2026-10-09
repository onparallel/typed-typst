// Converted from test/suite/corpus/gradient-conic-hsv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { color, doc, gradient, page, pt, purple, red, set } from '../../../src/index.ts'

export default () => {
  return doc(set(page, { width: pt(100), height: pt(100), fill: gradient.conic({ space: color.hsv }, red, purple) }))
}
