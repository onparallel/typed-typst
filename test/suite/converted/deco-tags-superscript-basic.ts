// Converted from test/suite/corpus/deco-tags-superscript-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, super_ } from '../../../src/index.ts'

export default () => {
  return doc(inline`CI${super_(inline`-`)} has a negative charge.`)
}
