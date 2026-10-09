// Converted from test/suite/corpus/issue-2095-pagebreak-numbering.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { counter, doc, inline, m, page, pagebreak, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { numbering: null }), 'This and next page should not be numbered'),
    inline(pagebreak({ weak: true, to: 'odd' })),
    m.lines(set(page, { numbering: '1' }), inline(counter(page).update(1))),
    'This page should',
  )
}
