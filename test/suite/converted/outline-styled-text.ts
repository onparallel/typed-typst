// Converted from test/suite/corpus/outline-styled-text.typ by scripts/convert-suite.ts — do not edit.
import { blue, doc, heading, inline, outline, text } from '../../../src/index.ts'

export default () => {
  return doc(inline(outline({ title: null })), heading({ depth: 1 }, inline(text({ fill: blue }, inline`He`), 'llo')))
}
