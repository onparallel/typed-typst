// Converted from test/suite/corpus/ops-add-content.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, inline, space, strong } from '../../../src/index.ts'

export default () => {
  return doc(inline(add(inline(strong(inline`Hello`), space), inline`world!`)))
}
