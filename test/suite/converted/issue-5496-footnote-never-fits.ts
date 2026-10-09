// Converted from test/suite/corpus/issue-5496-footnote-never-fits.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, m, page, pt, set, text, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(20), height: pt(20) }), set(footnote.entry, { indent: pt(0) })),
    inline(footnote(times(text({ size: pt(15) }, inline`a`), 100))),
  )
}
