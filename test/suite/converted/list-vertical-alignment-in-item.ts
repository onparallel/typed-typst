// Converted from test/suite/corpus/list-vertical-alignment-in-item.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, auto, bottom, doc, em, inline, m, page, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: auto }), m.list(m.item(['a']), m.item([align(bottom, inline`b`)]), m.item(['c']))),
    'd',
    m.lines(set(page, { height: em(10) }), m.list(m.item(['a']), m.item([align(bottom, inline`b`)]), m.item(['c']))),
    'd',
  )
}
