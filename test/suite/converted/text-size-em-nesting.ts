// Converted from test/suite/corpus/text-size-em-nesting.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, blocks, contentBlock, doc, em, inline, m, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { size: pt(5) }),
      inline`A ${contentBlock(
        blocks(
          m.lines(
            set(text, { size: em(2) }),
            inline`B ${contentBlock(blocks(m.lines(set(text, { size: add(em(1.5), pt(1)) }), inline`C ${text({ size: em(2) }, inline`D`)} E`)))}
F`,
          ),
        ),
      )} G`,
    ),
  )
}
