// Converted from test/suite/corpus/rect-fill-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, fr, grid, inline, let_, m, pt, rect, spread, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [variantDecl, variant] = let_('variant', rect.with({ width: pt(20), height: pt(10) }))
  return doc(
    m.lines(
      variantDecl,
      unsafeRaw.markup`#let items = for (i, item) in (
  variant(stroke: none),
  variant(),
  variant(fill: none),
  variant(stroke: 2pt),
  variant(stroke: eastern),
  variant(stroke: eastern + 2pt),
  variant(fill: eastern),
  variant(fill: eastern, stroke: none),
  variant(fill: forest, stroke: none),
  variant(fill: forest, stroke: conifer),
  variant(fill: forest, stroke: black + 2pt),
  variant(fill: forest, stroke: conifer + 2pt),
).enumerate() {
  (align(horizon)[#(i + 1).], item, [])
}`,
    ),
    inline(
      grid({ columns: [auto, auto, fr(1), auto, auto, fr(0)], gutter: pt(5) }, spread(unsafeRaw.code<any>`items`)),
    ),
  )
}
