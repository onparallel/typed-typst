// Converted from test/suite/corpus/columns-colbreak-after-place.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, colbreak, doc, inline, m, page, place, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { width: cm(7.05), columns: 2 }), inline`${place(inline`OOF`)} ${colbreak()} In flow.`))
}
