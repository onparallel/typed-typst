// Converted from test/suite/corpus/issue-5496-footnote-in-float-never-fits.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, page, place, pt, set, text, times, top } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: pt(20), height: pt(20) }),
    inline(place({ float: true }, top, footnote(times(text({ size: pt(15) }, inline`a`), 100)))),
  )
}
