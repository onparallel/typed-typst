// Converted from test/suite/corpus/issue-2530-term-item-panic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, terms } from '../../../src/index.ts'

export default () => {
  return doc(inline(terms.item(inline`Hello`, inline`World!`)))
}
