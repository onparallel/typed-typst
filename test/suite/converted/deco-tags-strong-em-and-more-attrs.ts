// Converted from test/suite/corpus/deco-tags-strong-em-and-more-attrs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, green, inline, strong, underline } from '../../../src/index.ts'

export default () => {
  return doc(inline(underline({ stroke: green }, inline(emph(inline(strong(inline`strong and emph`)))))))
}
