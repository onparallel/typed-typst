// Converted from test/suite/corpus/issue-4468-linebreak-thai.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, h, inline, m, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { font: 'Noto Sans Thai' }), inline`${h(pt(85))} งบิก`))
}
