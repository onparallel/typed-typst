// Converted from test/suite/corpus/logical-children-tags-hide-around-footnote.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, hide, inline, space } from '../../../src/index.ts'

export default () => {
  return doc(inline(hide(inline`${space}Some text ${footnote(inline`explanation`)}.${space}`)), 'Some other text.')
}
