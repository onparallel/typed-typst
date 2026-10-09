// Converted from test/suite/corpus/enum-number-align-2d.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, box, center, doc, enum_, horizon, inline, m, pt, set, teal } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(enum_, { numberAlign: add(center, horizon) }),
      m.enum(
        m.numbered(1, [box({ fill: teal, inset: pt(10) }, inline`a`)]),
        m.numbered(8, [box({ fill: teal, inset: pt(10) }, inline`b`)]),
        m.numbered(16, [box({ fill: teal, inset: pt(10) }, inline`c`)]),
      ),
    ),
  )
}
