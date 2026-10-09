// Converted from test/suite/corpus/deco-tags-strong-and-em.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, inline, strong } from '../../../src/index.ts'

export default () => {
  return doc(inline(emph(inline(strong(inline`strong and emph`)))))
}
