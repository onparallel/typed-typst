// Converted from test/suite/corpus/counter-page-header-before-set-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, aqua, center, counter, doc, inline, m, page, pt, set, top } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { numbering: '1', numberAlign: add(top, center), margin: { top: pt(20) } }),
      inline`A ${counter(page).update(4)} ${set(page, { fill: aqua })} B`,
    ),
  )
}
