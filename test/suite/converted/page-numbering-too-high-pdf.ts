// Converted from test/suite/corpus/page-numbering-too-high-pdf.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { counter, doc, inline, m, page, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { numbering: '①', footer: null }), inline`${counter(page).update(100)} Hello`))
}
