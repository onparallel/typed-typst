// Converted from test/suite/corpus/place-flush-figure.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bottom, define, doc, figure, inline, m, page, pct, place, pt, rect, set, top } from '../../../src/index.ts'

export default () => {
  const floater = define('floater')
    .pos('align', T.any)
    .pos('height', T.any)
    .pos('caption', T.any)
    .returns(T.any)
    .body((p) =>
      figure({ placement: p['align'], caption: p['caption'] }, rect({ width: pct(100), height: p['height'] })),
    )
  return doc(
    m.lines(set(page, { height: pt(120) }), floater.decl),
    inline`${floater(top, pt(30), inline`I`)} A`,
    inline`${floater(bottom, pt(50), inline`II`)} ${place.flush()} B`,
  )
}
