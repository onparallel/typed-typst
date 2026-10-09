// Converted from test/suite/corpus/issue-grid-gutter-skip.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, em, fr, inline, linebreak, page, pt, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: em(10) }),
    inline(
      table(
        { rowGutter: em(1.5), inset: pt(0), rows: [fr(1), auto] },
        inline`a`,
        inline(),
        inline(),
        inline`f`,
        inline`e${linebreak()} e`,
        inline(),
        inline`a`,
      ),
    ),
  )
}
