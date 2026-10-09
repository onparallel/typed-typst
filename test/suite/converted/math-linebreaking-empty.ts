// Converted from test/suite/corpus/math-linebreaking-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`${unsafeRaw.math``}${linebreak()} Nothing: ${unsafeRaw.math``}, just empty.`)
}
