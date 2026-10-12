// Converted from test/suite/corpus/heading-block.typ by scripts/convert-suite.ts — do not edit.
import { contentBlock, doc, heading, inline, m, space } from '../../../src/index.ts'

export default () => {
  return doc(
    heading({ depth: 1 }, inline(contentBlock(inline`This is multiline.${space}`))),
    m.lines(heading({ depth: 1 }, inline('This')), 'is not.'),
  )
}
