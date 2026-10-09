// Converted from test/suite/corpus/footnote-styling.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, label, labelled, linebreak, m, red, ref, show, sym, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(footnote, text.with({ fill: red })),
      inline`Real ${labelled(footnote(inline`...`), label('fn'))} ${linebreak()} Ref ${ref(label('fn'))}`,
    ),
  )
}
