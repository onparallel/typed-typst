// Converted from test/suite/corpus/issue-1445-widow-orphan-unnecessary-skip.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, block, cm, columns, doc, inline, lorem, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: cm(16) }), inline(block({ height: pt(30), fill: aqua }, columns(2, lorem(19))))),
  )
}
