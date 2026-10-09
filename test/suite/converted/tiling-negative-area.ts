// Converted from test/suite/corpus/tiling-negative-area.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, pt, rect, tiling } from '../../../src/index.ts'

export default () => {
  return doc(inline(rect({ fill: tiling({ size: [pt(-2), pt(-2)] }, inline`Hello`) })))
}
