// Converted from test/suite/corpus/issue-2213-align-fr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, align, bottom, doc, fr, inline, m, page, pt, right, set, v } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { height: pt(80) }), inline`A ${v(fr(1))} B ${align(add(bottom, right), inline`C`)}`))
}
