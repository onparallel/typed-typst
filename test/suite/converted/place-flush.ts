// Converted from test/suite/corpus/place-flush.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bottom, define, doc, inline, m, page, pct, place, pt, rect, set, top } from '../../../src/index.ts'

export default () => {
  const floater = define('floater')
    .pos('align', T.any)
    .pos('height', T.any)
    .returns(T.any)
    .body((p) => place({ float: true }, p['align'], rect({ width: pct(100), height: p['height'] })))
  return doc(
    m.lines(set(page, { height: pt(120) }), floater.decl),
    inline`${floater(top, pt(30))} A`,
    inline`${floater(bottom, pt(50))} ${place.flush()} B`,
  )
}
