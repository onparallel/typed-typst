// Converted from test/suite/corpus/show-selector-replace-and-show-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, contentBlock, doc, heading, inline, m, pt, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(heading, inline`B`),
      show(heading, set(text, { size: pt(10), weight: 400 })),
      inline`A ${contentBlock(blocks(m.heading(1, 'Heading')))} C`,
    ),
  )
}
