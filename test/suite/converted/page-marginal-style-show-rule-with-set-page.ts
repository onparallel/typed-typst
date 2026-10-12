// Converted from test/suite/corpus/page-marginal-style-show-rule-with-set-page.typ by scripts/convert-suite.ts — do not edit.
import { codeBlock, doc, heading, inline, page, pt, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    show(heading, (it, ctx) => codeBlock([set(page, { numbering: '1', margin: { bottom: pt(20) } })], it)),
    heading({ depth: 1 }, inline('Introduction')),
  )
}
