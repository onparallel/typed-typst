// Converted from test/suite/corpus/footnote-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline(footnote(inline`Hi`)))
}
