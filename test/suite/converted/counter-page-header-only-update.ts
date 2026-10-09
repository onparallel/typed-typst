// Converted from test/suite/corpus/counter-page-header-only-update.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, center, counter, doc, inline, page, pt, set, top } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { numbering: '1', numberAlign: add(top, center), margin: { top: pt(20) } }),
    inline(counter(page).update(5)),
  )
}
