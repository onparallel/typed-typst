// Converted from test/suite/corpus/figure-breakable.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, em, figure, inline, m, page, set, show, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: em(6) }), show(figure, set(block, { breakable: true }))),
    inline(figure({ caption: inline`A table` }, table(inline`a`, inline`b`, inline`c`, inline`d`, inline`e`))),
  )
}
