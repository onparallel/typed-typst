// Converted from test/suite/corpus/counter-page-footer-only-update.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { counter, doc, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { numbering: '1 / 1', margin: { bottom: pt(20) } }), inline(counter(page).update(5))))
}
