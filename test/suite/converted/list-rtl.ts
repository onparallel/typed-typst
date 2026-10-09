// Converted from test/suite/corpus/list-rtl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, rtl, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { dir: rtl }), m.list(m.item(['מימין לשמאל']))))
}
