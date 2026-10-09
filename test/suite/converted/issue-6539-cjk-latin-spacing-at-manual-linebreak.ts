// Converted from test/suite/corpus/issue-6539-cjk-latin-spacing-at-manual-linebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, auto, box, doc, em, end, green, inline, linebreak, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { cjkLatinSpacing: auto }), set(box, { width: em(2.3), stroke: { x: green } })),
    inline(box(align(end, inline`甲国${linebreak()} T国`))),
    inline(box(align(end, inline`乙国 ${linebreak()} T国`))),
    inline(box(align(end, inline`丙国 T国`))),
    inline(box(align(end, inline`丁国T国`))),
  )
}
