// Converted from test/suite/corpus/deco-tags-strong-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, strong } from '../../../src/index.ts'

export default () => {
  return doc(inline`This ${strong(inline`HERE`)} is important!`)
}
