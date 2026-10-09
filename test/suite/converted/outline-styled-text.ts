// Converted from test/suite/corpus/outline-styled-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, inline, m, outline, text } from '../../../src/index.ts'

export default () => {
  return doc(inline(outline({ title: null })), m.heading(1, text({ fill: blue }, inline`He`), 'llo'))
}
