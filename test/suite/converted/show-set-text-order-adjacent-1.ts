// Converted from test/suite/corpus/show-set-text-order-adjacent-1.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, m, red, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show('He', set(text, { fill: red })), show('ya', set(text, { fill: blue })), 'Heya'))
}
