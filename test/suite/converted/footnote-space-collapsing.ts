// Converted from test/suite/corpus/footnote-space-collapsing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`A${footnote(inline`A`)} ${linebreak()} A ${footnote(inline`A`)}`)
}
