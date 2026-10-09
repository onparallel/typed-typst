// Converted from test/suite/corpus/context-body-is-closure.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.code<any>`(context (a: none) => {})`))
}
