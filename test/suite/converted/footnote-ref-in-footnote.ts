// Converted from test/suite/corpus/footnote-ref-in-footnote.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, label, labelled, ref, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      footnote(inline`Reference to next ${ref(label('fn'))}`),
      space,
      labelled(footnote(inline`Reference to myself ${ref(label('fn'))}`), label('fn')),
      space,
      footnote(inline`Reference to previous ${ref(label('fn'))}`),
    ),
  )
}
