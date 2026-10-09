// Converted from test/suite/corpus/footnote-tags-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline`Footnote ${footnote(inline`Hi`)} in text.`)
}
