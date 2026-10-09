// Converted from test/suite/corpus/gradient-radial-hsl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { color, doc, gradient, inline, pt, spread, square } from '../../../src/index.ts'

export default () => {
  return doc(inline(square({ size: pt(100), fill: gradient.radial({ space: color.hsl }, spread(color.map.rainbow)) })))
}
