// Converted from test/suite/corpus/block-fr-height-first-child.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, fr, inline, m, page, pt, rect, set, space } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { height: pt(100) }), inline(rect({ height: fr(1) }), space, rect())))
}
