// Converted from test/suite/corpus/footnote-ref-forward.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, label, labelled, linebreak, ref } from '../../../src/index.ts'

export default () => {
  return doc(inline`Usage ${ref(label('fn'))} ${linebreak()} Definition ${labelled(footnote(inline`Hi`), label('fn'))}`)
}
