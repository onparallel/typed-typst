// Converted from test/suite/corpus/issue-4454-footnote-ref-numbering.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, label, labelled, ref } from '../../../src/index.ts'

export default () => {
  return doc(inline`A ${labelled(footnote({ numbering: '*' }, inline`B`), label('fn'))}, C ${ref(label('fn'))},
D ${ref(label('fn'))}, E ${ref(label('fn'))}.`)
}
