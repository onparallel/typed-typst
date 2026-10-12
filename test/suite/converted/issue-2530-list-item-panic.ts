// Converted from test/suite/corpus/issue-2530-list-item-panic.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, list } from '../../../src/index.ts'

export default () => {
  return doc(inline(list.item(inline`Hello`)))
}
