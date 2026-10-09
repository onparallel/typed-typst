// Converted from test/suite/corpus/terms-constructor.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, terms } from '../../../src/index.ts'

export default () => {
  return doc(inline(terms(terms.item(inline`One`, inline`First`), terms.item(inline`Two`, inline`Second`))))
}
