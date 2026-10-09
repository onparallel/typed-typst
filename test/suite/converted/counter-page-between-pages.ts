// Converted from test/suite/corpus/counter-page-between-pages.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, center, counter, doc, inline, m, page, pagebreak, pt, set, top } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { numbering: '1', margin: { bottom: pt(20) } }),
      inline`A ${pagebreak()} ${counter(page).update(5)} ${set(page, { numberAlign: add(top, center), margin: { top: pt(20), bottom: pt(10) } })}
B`,
    ),
  )
}
