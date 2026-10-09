// Converted from test/suite/corpus/list-marker-align-vertical.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bottom, box, doc, horizon, inline, list, m, pt, set, teal, top } from '../../../src/index.ts'

export default () => {
  return doc(
    m.list(m.item([box({ fill: teal, inset: pt(10) }, inline`a`)])),
    m.lines(set(list, { markerAlign: top }), m.list(m.item([box({ fill: teal, inset: pt(10) }, inline`b`)]))),
    m.lines(set(list, { markerAlign: horizon }), m.list(m.item([box({ fill: teal, inset: pt(10) }, inline`c`)]))),
    m.lines(set(list, { markerAlign: bottom }), m.list(m.item([box({ fill: teal, inset: pt(10) }, inline`d`)]))),
  )
}
