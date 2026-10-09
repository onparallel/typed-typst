// Converted from test/suite/corpus/show-where-folding-text-size.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, blue, contentBlock, doc, em, inline, m, pt, set, show, text, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { size: pt(5) }), set(text, { size: em(2) })),
    inline(
      contentBlock(blocks(m.lines(show(where(text, { size: em(2) }), set(text, { fill: blue })), '2em not blue'))),
    ),
    inline(contentBlock(blocks(m.lines(show(where(text, { size: pt(10) }), set(text, { fill: blue })), '10pt blue')))),
  )
}
