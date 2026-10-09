// Converted from test/suite/corpus/spacing-h-and-v.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, em, fr, h, inline, let_, linebreak, m, minus, pct, pt, space, v } from '../../../src/index.ts'

export default () => {
  const [xDecl, x] = let_('x', minus(pct(25), pt(4)))
  return doc(
    inline(box(inline`A ${linebreak()} B`), space, box(inline`A ${v({ weak: true }, em(0.65))} B`)),
    inline`Inv${h(pt(0))}isible`,
    inline`Add ${h(pt(10))} ${h(pt(10))} up`,
    m.lines(xDecl, inline`|${h(x)}|${h(x)}|${h(x)}|${h(x)}|`),
    inline`| ${h(fr(1))} | ${h(fr(2))} | ${h(fr(1))} |`,
  )
}
