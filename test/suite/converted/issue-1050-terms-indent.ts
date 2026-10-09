// Converted from test/suite/corpus/issue-1050-terms-indent.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, lorem, m, page, par, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(110) }), set(par, { firstLineIndent: cm(0.5) })),
    m.list(m.item([lorem(5)]), m.item([lorem(5)])),
    m.enum(m.item([lorem(5)]), m.item([lorem(5)])),
    m.terms(m.term(['S'], [lorem(5)]), m.term(['XXXL'], [lorem(5)])),
  )
}
