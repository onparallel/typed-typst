// Converted from test/suite/corpus/divider-show-decorative.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, block, center, divider, doc, inline, m, page, pt, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(200) }),
      show(divider, set(align, { alignment: center })),
      show(divider, block(inline`∗ ∗ ∗`)),
      inline`Chapter 1 ${divider()} Chapter 2`,
    ),
  )
}
