// Converted from test/suite/corpus/list-attached.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(m.lines('Attached to:', m.list(m.item(['the bottom']), m.item(['of the paragraph']))), 'Next paragraph.')
}
