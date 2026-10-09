// Converted from test/suite/corpus/issue-2048-outline-multiline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, m, outline, page, pt, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(125) }), set(heading, { numbering: '1.a.' }), show(heading, null)),
    inline(outline()),
    m.lines(m.heading(1, 'A'), m.heading(2, 'This just fits here')),
  )
}
