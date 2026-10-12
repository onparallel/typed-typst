// Converted from test/suite/corpus/page-marginal-style-show-rule-with-pagebreak.typ by scripts/convert-suite.ts — do not edit.
import { codeBlock, doc, heading, inline, m, page, pagebreak, pt, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { numbering: '1', margin: { bottom: pt(20) } }),
      show(heading, (it, ctx) => codeBlock([pagebreak({ weak: true }), it])),
    ),
    heading({ depth: 1 }, inline('Introduction')),
  )
}
