// Converted from test/suite/corpus/footnote-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`First ${linebreak()} Second ${footnote(inline`A, ${footnote(inline`B, ${footnote(inline`C`)}`)}`)}
Third ${footnote(inline`D, ${footnote(inline`E`)}`)} ${linebreak()} Fourth ${footnote(inline`F`)}`)
}
