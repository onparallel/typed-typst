// Converted from test/suite/corpus/issue-2199-place-spacing-bottom.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, bottom, doc, em, figure, inline, rect, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    show(figure, set(block, { spacing: em(4) })),
    inline`Paragraph before float. ${figure({ placement: bottom }, rect())} Paragraph after float.`,
  )
}
