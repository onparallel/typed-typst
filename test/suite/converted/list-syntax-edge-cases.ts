// Converted from test/suite/corpus/list-syntax-edge-cases.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(m.list(m.item([])), 'Not in list -Nope'))
}
