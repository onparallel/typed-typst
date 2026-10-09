// Converted from test/suite/corpus/issue-flow-frame-placement.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, lorem, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { height: pt(105) }), inline(block(lorem(20)))))
}
