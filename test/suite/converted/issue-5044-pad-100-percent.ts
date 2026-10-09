// Converted from test/suite/corpus/issue-5044-pad-100-percent.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, cm, doc, inline, m, pad, page, pct, pt, red, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(30), height: pt(30) }),
      inline(pad(pct(100), block({ width: cm(1), height: cm(1), fill: red }))),
    ),
  )
}
