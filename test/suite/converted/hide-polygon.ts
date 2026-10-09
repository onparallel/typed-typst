// Converted from test/suite/corpus/hide-polygon.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, hide, inline, pct, polygon, pt, space } from '../../../src/index.ts'

export default () => {
  return doc(inline`Hidden: ${hide(inline(space, polygon([pct(20), pt(0)], [pct(60), pt(0)], [pct(80), cm(2)], [pct(0), cm(2)]), space))}
${polygon([pct(20), pt(0)], [pct(60), pt(0)], [pct(80), cm(2)], [pct(0), cm(2)])}`)
}
