// Converted from test/suite/corpus/show-text-smartquote.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, red, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show('up," she', set(text, { fill: red })), inline`"What's up," she asked.`))
}
