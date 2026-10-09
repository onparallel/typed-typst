// Converted from test/suite/corpus/issue-3264-rect-negative-dimensions.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, blue, center, cm, doc, gradient, inline, rect, red, right } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(rect({ width: cm(-1), fill: gradient.linear(red, blue) }, inline`Reverse left`)),
    inline(rect({ width: cm(1), fill: gradient.linear(red, blue) }, inline`Left`)),
    inline(align(center, rect({ width: cm(-1), fill: gradient.linear(red, blue) }, inline`Reverse center`))),
    inline(align(center, rect({ width: cm(1), fill: gradient.linear(red, blue) }, inline`Center`))),
    inline(align(right, rect({ width: cm(-1), fill: gradient.linear(red, blue) }, inline`Reverse right`))),
    inline(align(right, rect({ width: cm(1), fill: gradient.linear(red, blue) }, inline`Right`))),
  )
}
