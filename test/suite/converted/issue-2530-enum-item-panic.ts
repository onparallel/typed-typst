// Converted from test/suite/corpus/issue-2530-enum-item-panic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, enum_, inline, space } from '../../../src/index.ts'

export default () => {
  return doc(inline(enum_.item(auto, inline`Hello`), space, enum_.item(17, inline`Hello`)))
}
