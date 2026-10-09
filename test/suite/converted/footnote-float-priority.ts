// Converted from test/suite/corpus/footnote-float-priority.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, block, define, doc, footnote, inline, page, place, pt, rect, set, space, top } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    set(page, { height: pt(100) }),
    inline(lines(3)),
    inline(place({ float: true }, top, rect({ height: pt(40) }))),
    inline(
      block(
        inline`${space}V ${footnote(inline`1`)} ${footnote(inline`2`)} ${footnote(inline`3`)} ${footnote(inline`4`)}${space}`,
      ),
    ),
    inline(lines(5)),
  )
}
