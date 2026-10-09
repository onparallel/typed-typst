// Converted from test/suite/corpus/page-marginal-style-shared-initial-interaction.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, codeBlock, doc, inline, m, page, pagebreak, pt, red, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { numbering: '1', margin: { bottom: pt(20) } }),
      inline`A ${codeBlock([set(text, { fill: red })], pagebreak())} ${text({ fill: blue }, inline`B`)}`,
    ),
  )
}
