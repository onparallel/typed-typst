// Converted from test/suite/corpus/issue-5496-footnote-separator-never-fits.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, footnote, inline, m, page, set, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: em(2) }), set(footnote.entry, { separator: v(em(5)) })),
    inline(footnote(inline())),
  )
}
