// Converted from test/suite/corpus/label-unclosed-is-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`1 < 2 is ${unsafeRaw.code<any>`if 1 < 2 [not]`} a label.`)
}
