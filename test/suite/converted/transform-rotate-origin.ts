// Converted from test/suite/corpus/transform-rotate-origin.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, deg, doc, image, inline, left, path, pct, rotate, top } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(rotate({ origin: add(top, left) }, deg(10), image({ width: pct(50) }, path('/assets/images/tiger.jpg')))),
  )
}
