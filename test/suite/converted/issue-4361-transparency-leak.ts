// Converted from test/suite/corpus/issue-4361-transparency-leak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, image, inline, path, pct, pt, rect, red, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      rect({ fill: red.transparentize(pct(50)) }),
      space,
      image({ width: pt(45) }, path('/assets/images/tiger.jpg')),
    ),
  )
}
