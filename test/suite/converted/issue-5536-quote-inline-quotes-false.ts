// Converted from test/suite/corpus/issue-5536-quote-inline-quotes-false.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, quote } from '../../../src/index.ts'

export default () => {
  return doc(inline`Lorem ${quote({ block: false, quotes: false }, inline`dolor`)}.`)
}
