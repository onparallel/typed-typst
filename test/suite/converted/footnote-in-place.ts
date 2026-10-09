// Converted from test/suite/corpus/footnote-in-place.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, bottom, doc, figure, footnote, inline, place, rect, right, top } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`A ${place(add(top, right), footnote(inline`A`))} ${figure({ placement: bottom, caption: footnote(inline`B`) }, rect())}`,
  )
}
