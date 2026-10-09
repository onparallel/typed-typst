// Converted from test/suite/corpus/color-rotate-hue.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, pct, rgb, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [colDecl, col] = let_('col', rgb(pct(50), pct(64), pct(16)))
  return doc(
    colDecl,
    inline(unsafeRaw.code<any>`for x in range(0, 11) {
  box(square(size: 9pt, fill: rgb(col).rotate(x * 36deg)))
}`),
    inline(unsafeRaw.code<any>`for x in range(0, 11) {
  box(square(size: 9pt, fill: rgb(col).rotate(x * 36deg, space: color.hsl)))
}`),
    inline(unsafeRaw.code<any>`for x in range(0, 11) {
  box(square(size: 9pt, fill: rgb(col).rotate(x * 36deg, space: color.hsv)))
}`),
  )
}
