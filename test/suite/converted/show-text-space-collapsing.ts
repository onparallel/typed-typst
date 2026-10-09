// Converted from test/suite/corpus/show-text-space-collapsing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { contentBlock, data, doc, inline, m, red, set, show, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show('i ther', set(text, { fill: red })),
      inline`hi${contentBlock(inline(space))}${contentBlock(inline(space))}the${data('re')}`,
    ),
  )
}
