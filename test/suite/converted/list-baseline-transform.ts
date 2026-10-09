// Converted from test/suite/corpus/list-baseline-transform.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { deg, doc, inline, m, pct, rotate, scale, set, skew } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(rotate, { reflow: true }), set(scale, { reflow: true }), set(skew, { reflow: true })),
    m.list(
      m.item(['Abc']),
      m.item([rotate(deg(90), inline`Abc`)]),
      m.item([rotate(deg(180), inline`Abc`)]),
      m.item([scale(pct(30), inline`Abc`)]),
      m.item([skew({ ax: deg(30) }, inline`Abc`)]),
      m.item([skew({ ay: deg(30) }, inline`Abc`)]),
    ),
  )
}
