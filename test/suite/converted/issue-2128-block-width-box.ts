// Converted from test/suite/corpus/issue-2128-block-width-box.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, box, doc, inline, pct, red, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      block({ width: pct(100), fill: red }, box('a box')),
      space,
      block({ width: pct(100), fill: red }, inline(box('a box'), space, box())),
    ),
  )
}
