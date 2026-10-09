// Converted from test/suite/corpus/list-tabs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(m.list(m.item(m.lines('A with 1 tab', m.list(m.item(['B with 2 tabs']))))))
}
