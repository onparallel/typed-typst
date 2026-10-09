// Converted from test/suite/corpus/page-set-forces-break.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { contentBlock, doc, inline, m, page, pt, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(80), height: pt(80) }),
      inline(
        contentBlock(inline`${set(page, { width: pt(40) })}High`),
        space,
        contentBlock(inline`${set(page, { height: pt(40) })}Wide`),
      ),
    ),
    inline(contentBlock(inline`${set(page, { paper: 'a11', flipped: true })}Flipped A11`)),
  )
}
