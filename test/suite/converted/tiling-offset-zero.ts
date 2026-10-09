// Converted from test/suite/corpus/tiling-offset-zero.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, page, pct, pt, rect, set, tiling, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const t = define('t')
    .rest('args', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`tiling(size: (30pt, 30pt), ..args)[
  #square(width: 100%, height: 100%, stroke: 1pt, fill: blue)
]`,
    )
  return doc(
    t.decl,
    set(page, { width: pt(100), height: pt(100) }),
    inline(rect({ fill: t({ offset: [pt(0), pt(0)] }), width: pct(100), height: pct(100), stroke: pt(1) })),
  )
}
