// Converted from test/suite/corpus/page-marginal-style-text-call-around-pagebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pagebreak, pt, red, set, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { numbering: '1', margin: { bottom: pt(20) } }),
      inline`A ${text({ fill: red }, inline`${space}${pagebreak({ weak: true })} B${space}`)}`,
    ),
  )
}
