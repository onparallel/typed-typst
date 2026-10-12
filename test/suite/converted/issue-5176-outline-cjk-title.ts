// Converted from test/suite/corpus/issue-5176-outline-cjk-title.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, outline, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { font: 'Noto Serif CJK SC' }), show(heading, null)),
    inline(outline({ title: null })),
    m.lines(heading({ depth: 1 }, inline('测')), heading({ depth: 1 }, inline('很'))),
  )
}
