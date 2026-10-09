// Converted from test/suite/corpus/circle-beyond-page-width-overflows.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { circle, doc, inline, m, page, pct, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { height: pt(100) }), inline(circle({ width: pct(150) }))))
}
