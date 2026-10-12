// Converted from test/suite/corpus/page-marginal-style-show-rule-with-page-call.typ by scripts/convert-suite.ts — do not edit.
import { aqua, doc, heading, inline, m, page, show } from '../../../src/index.ts'

export default () => {
  return doc(show(heading, page.with({ fill: aqua })), m.lines('A', heading({ depth: 1 }, inline('Introduction')), 'B'))
}
