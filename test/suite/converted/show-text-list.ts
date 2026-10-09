// Converted from test/suite/corpus/show-text-list.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, m, show } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show('hi', blocks(m.list(m.item(['B'])))), m.list(m.item(['A'])), 'hi', m.list(m.item(['C']))))
}
