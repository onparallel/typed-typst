// Converted from test/suite/corpus/show-text-linebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { contentBlock, doc, inline, linebreak, m, red, set, show, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show('lo\nwo', set(text, { fill: red })),
      inline`Hello ${contentBlock(inline(space))} ${linebreak()} ${contentBlock(inline(space))} ${contentBlock(inline(space))}
world!`,
    ),
  )
}
