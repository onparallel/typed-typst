// Converted from test/suite/corpus/tiling-relative-self.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  define,
  doc,
  green,
  inline,
  m,
  page,
  pct,
  pt,
  rect,
  set,
  tiling,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const t = define('t')
    .rest('args', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`tiling(size: (30pt, 30pt), ..args)[
  #set line(stroke: green)
  #place(top + left, line(start: (0%, 0%), end: (100%, 100%), stroke: 1pt))
  #place(top + left, line(start: (0%, 100%), end: (100%, 0%), stroke: 1pt))
]`,
    )
  return doc(
    t.decl,
    m.lines(
      set(page, { fill: t(), width: pt(100), height: pt(100) }),
      inline(rect({ width: pct(100), height: pct(100), fill: t({ relative: 'self' }), stroke: add(pt(1), green) })),
    ),
  )
}
