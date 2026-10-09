// Converted from test/suite/corpus/tiling-relative-parent.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, page, pct, pt, rect, set, tiling, unsafeRaw, white } from '../../../src/index.ts'

export default () => {
  const t = define('t')
    .pos('fill', T.any)
    .rest('args', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`tiling(size: (30pt, 30pt), ..args)[
  #rect(width: 100%, height: 100%, fill: fill, stroke: none)
  #place(top + left, line(start: (0%, 0%), end: (100%, 100%), stroke: 1pt))
  #place(top + left, line(start: (0%, 100%), end: (100%, 0%), stroke: 1pt))
]`,
    )
  return doc(
    t.decl,
    set(page, { fill: t(white), width: pt(100), height: pt(100) }),
    inline(rect({ fill: t({ relative: 'parent' }, null), width: pct(100), height: pct(100), stroke: pt(1) })),
  )
}
