// Converted from test/suite/corpus/show-text-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, set, show, smallcaps, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { font: 'Roboto' }), show('Der Spiegel', smallcaps), 'Die Zeitung Der Spiegel existiert.'),
  )
}
