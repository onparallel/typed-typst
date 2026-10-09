// Converted from test/suite/corpus/pagebreak-followed-by-page-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, navy, page, pagebreak, set, text, white } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { fill: navy }),
      set(text, { fill: white }),
      inline`First ${pagebreak()} ${page(inline`Second`)} ${pagebreak({ weak: true })} ${page(inline`Third`)}`,
    ),
  )
}
