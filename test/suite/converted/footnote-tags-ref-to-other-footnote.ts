// Converted from test/suite/corpus/footnote-tags-ref-to-other-footnote.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, label, labelled } from '../../../src/index.ts'

export default () => {
  return doc(inline`This ${labelled(footnote(inline`content`), label('note'))} and ${footnote(label('note'))}.`)
}
