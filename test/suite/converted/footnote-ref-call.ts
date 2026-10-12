// Converted from test/suite/corpus/footnote-ref-call.typ by scripts/convert-suite.ts — do not edit.
import { doc, footnote, inline, label, labelled, ref, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      footnote(label('fn')),
      space,
      labelled(footnote(inline`Hi`), label('fn')),
      space,
      ref(label('fn')),
      space,
      footnote(label('fn')),
    ),
  )
}
