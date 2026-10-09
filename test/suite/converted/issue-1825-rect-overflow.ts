// Converted from test/suite/corpus/issue-1825-rect-overflow.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, inline, lorem, m, page, par, rect, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { width: cm(17.8) }), set(par, { justify: true }), inline(rect(lorem(70)))))
}
