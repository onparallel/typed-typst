// Converted from test/suite/corpus/terms-style-change-interrupted.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, lorem, m, pt, set, terms, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { size: pt(8) }), m.terms(m.term(['First list'], [lorem(6)]))),
    m.lines(set(terms, { hangingIndent: pt(30) }), m.terms(m.term(['Second list'], [lorem(5)]))),
  )
}
