// Converted from test/suite/corpus/issue-1204-list-baseline-alignment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, box, cm, doc, inline, m, pt, rect, red, space, text, unsafeRaw, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.list(
      m.item(['A']),
      m.item([unsafeRaw.math.block`sum_(i = 1)^n overbrace(x^6, y)`]),
      m.item([box({ baseline: cm(1) }, inline`C`)]),
      m.item([v(cm(1)), space, 'D']),
      m.item([text({ size: pt(48) }, inline`E`)]),
      m.item([block({ inset: pt(10), stroke: red }, inline`Hello world!`)]),
      m.item([rect(inline`Hello world!`)]),
    ),
  )
}
