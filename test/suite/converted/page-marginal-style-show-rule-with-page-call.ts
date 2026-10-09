// Converted from test/suite/corpus/page-marginal-style-show-rule-with-page-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, doc, heading, m, page, show } from '../../../src/index.ts'

export default () => {
  return doc(show(heading, page.with({ fill: aqua })), m.lines('A', m.heading(1, 'Introduction'), 'B'))
}
