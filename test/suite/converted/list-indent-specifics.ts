// Converted from test/suite/corpus/list-indent-specifics.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(m.list(m.item(m.lines('A', m.list(m.item(['B']), m.item(['C'])))), m.item(['D'])))
}
