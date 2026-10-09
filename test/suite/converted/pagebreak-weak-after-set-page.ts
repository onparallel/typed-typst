// Converted from test/suite/corpus/pagebreak-weak-after-set-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, doc, inline, m, page, pagebreak, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { fill: aqua }),
      inline`${pagebreak({ weak: true })} First ${pagebreak({ weak: true })} Second ${pagebreak({ weak: true })}`,
    ),
  )
}
