// Converted from test/suite/corpus/raw-show-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, raw, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show(raw, set(text, { font: 'Roboto' })), inline(raw('Roboto'))))
}
