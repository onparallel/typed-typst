// Converted from test/suite/corpus/list-non-attached-followed-by-attached.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc('Hello', m.list(m.item(['A'])), m.lines('World', m.list(m.item(['B']))))
}
