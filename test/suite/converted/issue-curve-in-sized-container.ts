// Converted from test/suite/corpus/issue-curve-in-sized-container.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, block, curve, doc, inline, pt } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      block(
        { fill: aqua, width: pt(20), height: pt(15) },
        curve(curve.move([pt(0), pt(0)]), curve.line([pt(10), pt(10)])),
      ),
    ),
  )
}
