// Converted from test/suite/corpus/issue-2199-place-spacing-default.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, em, inline, place, rect, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    show(place, set(block, { spacing: em(4) })),
    inline`Paragraph before place. ${place(rect())} Paragraph after place.`,
  )
}
