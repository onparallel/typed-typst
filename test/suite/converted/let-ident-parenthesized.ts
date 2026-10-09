// Converted from test/suite/corpus/let-ident-parenthesized.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(unsafeRaw.markup`#let (a) = (1, 2)`)
}
