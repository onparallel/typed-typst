// Converted from test/suite/corpus/show-set-text-order-overlapping-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, red, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show('Heya', set(text, { fill: red })), show('yaho', set(text, { weight: 'bold' })), 'Heyaho'))
}
