// Converted from test/suite/corpus/emph-and-strong-call-in-word.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, inline, strong } from '../../../src/index.ts'

export default () => {
  return doc(inline`P${strong(inline`art`)}ly em${emph(inline`phas`)}ized.`)
}
