// Converted from test/suite/corpus/color-saturation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { color, deg, doc, inline, let_, m, pct, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [colDecl, col] = let_('col', color.hsl(deg(180), pct(0), pct(50)))
  const [colDecl_2, col_2] = let_('col', color.hsl(deg(180), pct(100), pct(50)))
  const [colDecl_3, col_3] = let_('col', color.hsv(deg(180), pct(0), pct(50)))
  const [colDecl_4, col_4] = let_('col', color.hsv(deg(180), pct(100), pct(50)))
  return doc(
    m.lines(
      colDecl,
      inline(unsafeRaw.code<any>`for x in range(0, 11) {
  box(square(size: 9pt, fill: col.saturate(x * 10%)))
}`),
    ),
    m.lines(
      colDecl_2,
      inline(unsafeRaw.code<any>`for x in range(0, 11) {
  box(square(size: 9pt, fill: col.desaturate(x * 10%)))
}`),
    ),
    m.lines(
      colDecl_3,
      inline(unsafeRaw.code<any>`for x in range(0, 11) {
  box(square(size: 9pt, fill: col.saturate(x * 10%)))
}`),
    ),
    m.lines(
      colDecl_4,
      inline(unsafeRaw.code<any>`for x in range(0, 11) {
  box(square(size: 9pt, fill: col.desaturate(x * 10%)))
}`),
    ),
  )
}
