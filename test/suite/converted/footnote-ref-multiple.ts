// Converted from test/suite/corpus/footnote-ref-multiple.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, label, labelled, linebreak, ref } from '../../../src/index.ts'

export default () => {
  return doc(inline`First ${labelled(footnote(inline`A`), label('fn1'))} ${linebreak()} Second ${labelled(footnote(inline`B`), label('fn2'))}
${linebreak()} First ref ${ref(label('fn1'))} ${linebreak()} Third ${footnote(inline`C`)} ${linebreak()}
Fourth ${labelled(footnote(inline`D`), label('fn4'))} ${linebreak()} Fourth ref ${ref(label('fn4'))}
${linebreak()} Second ref ${ref(label('fn2'))} ${linebreak()} Second ref again ${ref(label('fn2'))}`)
}
