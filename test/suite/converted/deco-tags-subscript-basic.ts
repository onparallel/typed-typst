// Converted from test/suite/corpus/deco-tags-subscript-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, sub } from '../../../src/index.ts'

export default () => {
  return doc(inline`CO${sub(inline`2`)} emissions. A2${sub(inline`hex`)}`)
}
