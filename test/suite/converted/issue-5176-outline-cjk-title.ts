// Converted from test/suite/corpus/issue-5176-outline-cjk-title.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, m, outline, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { font: 'Noto Serif CJK SC' }), show(heading, null)),
    inline(outline({ title: null })),
    m.lines(m.heading(1, '测'), m.heading(1, '很')),
  )
}
