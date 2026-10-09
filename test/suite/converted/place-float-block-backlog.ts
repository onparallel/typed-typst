// Converted from test/suite/corpus/place-float-block-backlog.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, inline, list, m, page, place, pt, rect, set, space, spread, top, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      inline(v(pt(60)), space, place({ float: true }, top, rect()), space, list(spread(data('ABCDEFGHIJ').clusters()))),
    ),
  )
}
