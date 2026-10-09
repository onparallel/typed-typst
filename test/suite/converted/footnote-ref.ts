// Converted from test/suite/corpus/footnote-ref.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, label, labelled, linebreak, ref } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`A footnote ${labelled(footnote(inline`Hi`), label('fn'))} ${linebreak()} A reference to it ${ref(label('fn'))}`,
  )
}
