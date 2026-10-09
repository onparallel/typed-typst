// Converted from test/suite/corpus/list-mixed-tabs-and-spaces.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(m.list(m.item(['A with 2 spaces']), m.item(['B with 2 tabs'])))
}
