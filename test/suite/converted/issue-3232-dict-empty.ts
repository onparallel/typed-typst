// Converted from test/suite/corpus/issue-3232-dict-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, box, data, doc, inline, space } from '../../../src/index.ts'

export default () => {
  return doc(inline(block({ outset: data({}) }, inline`Hi`), space, box({ radius: data({}) }, inline`Hi`)))
}
