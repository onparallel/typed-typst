// Converted from test/suite/corpus/list-multi-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, em, m, page, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: auto, height: em(4) }),
    m.list(m.item(['Abc def'], 'ghi jkl', 'mno pqr'), m.item(['Other other'], 'other other')),
  )
}
