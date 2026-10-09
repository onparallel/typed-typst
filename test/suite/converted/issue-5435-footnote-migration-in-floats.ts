// Converted from test/suite/corpus/issue-5435-footnote-migration-in-floats.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, footnote, inline, page, place, pt, set, space, top, v } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(50) }),
    inline(
      place({ float: true }, top, codeBlock([v(pt(100)), footnote(inline`a`)])),
      space,
      place({ float: true }, top, footnote(inline`b`)),
    ),
  )
}
