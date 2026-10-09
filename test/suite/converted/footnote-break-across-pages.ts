// Converted from test/suite/corpus/footnote-break-across-pages.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, footnote, inline, page, pt, set, space, sym } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').rest('args', T.any).returns(T.any).external()
  return doc(
    set(page, { height: pt(200) }),
    inline(
      lines(2),
      space,
      footnote(inline`${space}I ${footnote(inline`II ...`)}${space}`),
      space,
      lines(6),
      space,
      footnote(inline`III: ${lines(8, '1')}`),
      space,
      lines(6),
      space,
      footnote(inline`IV: ${lines(15, '1')}`),
      space,
      lines(6),
      space,
      footnote(inline`V`),
    ),
  )
}
