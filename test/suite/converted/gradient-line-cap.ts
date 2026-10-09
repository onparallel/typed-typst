// Converted from test/suite/corpus/gradient-line-cap.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`for cap in ("square", "butt", "round"){
  box(line(length: 10pt, stroke: (
    thickness: 20pt,
    paint: gradient.radial(blue, orange).sharp(4),
    cap: cap
  )), width: 30pt)
}`),
  )
}
