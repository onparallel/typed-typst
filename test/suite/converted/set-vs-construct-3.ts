// Converted from test/suite/corpus/set-vs-construct-3.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { contentBlock, doc, em, inline, pt, rect, set, text, yellow } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(contentBlock(inline(set(rect, { fill: yellow }), text({ size: em(1) }, rect({ inset: pt(5) }, rect()))))),
  )
}
