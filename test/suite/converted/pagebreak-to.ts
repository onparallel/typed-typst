// Converted from test/suite/corpus/pagebreak-to.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pagebreak, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(80), height: pt(30) }),
      inline`First ${pagebreak({ to: 'odd' })} Third ${pagebreak({ to: 'even' })} Fourth ${pagebreak({ to: 'even' })}
Sixth ${pagebreak()} Seventh ${pagebreak({ to: 'odd' })} ${page(inline`Ninth`)}`,
    ),
  )
}
