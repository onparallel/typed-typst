// Converted from test/suite/corpus/show-bare-content-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { contentBlock, doc, emph, inline, show, strong } from '../../../src/index.ts'

export default () => {
  return doc(inline`A ${contentBlock(inline(emph(inline`B ${show((c, ctx) => inline(strong(inline(c))))} C`)))}
D`)
}
