// Converted from test/suite/corpus/show-text-cyclic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, red, show, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show('Hello', text({ fill: red }, inline`Hello`)), 'Hello World!'))
}
