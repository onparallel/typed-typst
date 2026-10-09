// Converted from test/suite/corpus/issue-80-emoji-linebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, h, inline, m, page, pct, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { width: pt(50), height: auto }), inline`${h(pct(99))} 🏳️‍🌈 🏳️‍🌈`))
}
