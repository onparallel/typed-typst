// Converted from test/suite/corpus/show-set-text-order-contained-4.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, red, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show('He', set(text, { fill: red })), show('Heya', set(text, { weight: 'bold' })), 'Heya'))
}
