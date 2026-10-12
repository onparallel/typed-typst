// Converted from test/suite/corpus/logical-children-tags-underline-around-footnote.typ by scripts/convert-suite.ts — do not edit.
import { doc, footnote, inline, space, underline } from '../../../src/index.ts'

export default () => {
  return doc(inline(underline(inline`${space}Some text ${footnote(inline`explanation`)}.${space}`)), 'Some other text.')
}
