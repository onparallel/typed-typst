// Converted from test/suite/corpus/footnote-break-across-pages-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, block, define, doc, footnote, inline, m, page, pt, set, space } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').rest('args', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(120) }),
      inline(
        block(
          inline(
            space,
            lines(4),
            space,
            footnote(inline(space, lines(6, '1'), space, footnote(lines(3, 'I')), space)),
            space,
          ),
        ),
      ),
    ),
  )
}
