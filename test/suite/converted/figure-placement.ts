// Converted from test/suite/corpus/figure-placement.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, auto, bottom, define, doc, figure, inline, m, page, pct, place, pt, rect, set } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(set(page, { height: pt(160), columns: 2 }), set(place, { clearance: pt(10) })),
    inline(lines(4)),
    inline(figure({ placement: auto, scope: 'parent', caption: inline`I` }, rect({ height: pt(15), width: pct(80) }))),
    inline(figure({ placement: bottom, caption: inline`II` }, rect({ height: pt(15), width: pct(80) }))),
    inline(lines(2)),
    inline(figure({ placement: bottom, caption: inline`III` }, rect({ height: pt(25), width: pct(80) }))),
    inline(figure({ placement: auto, scope: 'parent', caption: inline`IV` }, rect({ width: pct(80) }))),
    inline(lines(15)),
  )
}
