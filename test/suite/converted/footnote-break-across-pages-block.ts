// Converted from test/suite/corpus/footnote-break-across-pages-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, block, define, doc, footnote, inline, m, page, pt, set, space } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').rest('args', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      inline(
        block(
          inline(
            space,
            lines(3),
            space,
            footnote(lines(6, '1')),
            space,
            footnote(inline`Y`),
            space,
            footnote(inline`Z`),
            space,
          ),
        ),
      ),
    ),
  )
}
