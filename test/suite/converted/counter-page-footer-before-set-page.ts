// Converted from test/suite/corpus/counter-page-footer-before-set-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, counter, doc, inline, m, page, pagebreak, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { numbering: '1', margin: { bottom: pt(20) } }),
      inline`A ${pagebreak()} ${counter(page).update(5)} ${set(page, { fill: aqua })} B`,
    ),
  )
}
